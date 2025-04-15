<script setup>
import { ref } from 'vue'
import categoryLink from '@/components/category-link.vue';
import carrousselProducts from '@/components/carroussel-products.vue';

const categories = [
  { id: 1, name: 'Bicicletas', icon: 'pedal_bike', link: '/' },
  { id: 2, name: 'Motos', icon: 'two_wheeler', link: '/' },
  { id: 3, name: 'Patinetes', icon: 'scooter', link: '/' },
  { id: 4, name: 'Scooters', icon: 'moped', link: '/' },
  { id: 5, name: 'Skates', icon: 'skateboarding', link: '/' },
]

const indexStart = ref(0)
const getCardStartStyle = (cardIndex) => {
  const position = (cardIndex - indexStart.value + categories.length) % categories.length

  const styles = [
    { transform: 'translateX(-33vw) scale(0.9)', opacity: 0 },
    { transform: 'translateX(-23vw) scale(1)', opacity: 1 },
    { transform: 'translateX(0vw) scale(1)', opacity: 1 },
    { transform: 'translateX(23vw) scale(1)', opacity: 1 },
    { transform: 'translateX(33vw) scale(0.9)', opacity: 0 }
  ]

  return { ...styles[position], transition: 'all 0.5s ease-in-out', position: 'absolute' }
}

const prevStart = () => indexStart.value > 0 ? indexStart.value-- : indexStart.value
const nextStart = () => indexStart.value < categories.length - 3 ? indexStart.value++ : indexStart.value
</script>

<template>
  <section id="home-banner" class="grid justify-center items-center mt-15 gap-20 text-center">
    <img src="/home/banner.png" alt="Patinetes elétricos" class="max-w-full h-auto">
  </section>

  <section id="categories" class="mt-15 text-center">
    <h3 class="text-[#C51F5D] text-2xl font-bold">Escolha sua aventura</h3>

    <ul id="container" class="relative mt-10 h-[20vw] flex justify-center items-centers">
      <span v-if="indexStart > 0" class="material-symbols-outlined button-start" id="prev-start"
        @click="prevStart">arrow_back_ios</span>
      <span v-if="indexStart < categories.length - 3" class="material-symbols-outlined button-start" id="next-start"
        @click="nextStart">arrow_forward_ios</span>

      <li v-for="categorie of categories" :key="categorie.id" :style="getCardStartStyle(categorie.id)">
        <categoryLink :to="categorie.link" :name="categorie.name" :icon="categorie.icon" />
      </li>
    </ul>
  </section>

  <section id="products" class="py-5">
    <carrousselProducts title="Promoções" />
    <carrousselProducts title="Novidades" />
    <carrousselProducts title="Recomendados" />
  </section>
</template>

<style scoped>
#container {
  .button-start {
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    background-color: #D9D9D95C;
    font-size: 4.5vw;
    color: #C51F5D;
    position: absolute;
    cursor: pointer;
    transform: translateY(70%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #prev-start {
    left: 0vw;
  }

  #next-start {
    right: 0vw;
  }
}
</style>