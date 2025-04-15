<script setup>
import { ref, defineProps } from 'vue';

defineProps(["title"]);

const products = [
  { id: 1, name: "Bicicleta", price: 0, image: '', favorite: true, sale: true },
  { id: 2, name: "Skate", price: 0, image: '', favorite: false, sale: true },
  { id: 3, name: "Scooter", price: 0, image: '', favorite: true, sale: true },
  { id: 4, name: "Patinete", price: 0, image: '', favorite: false, sale: true },
  { id: 5, name: "Moto", price: 0, image: '', favorite: true, sale: true },
]

const indexStart = ref(0)
function getCardStartStyle(cardIndex) {
  const position = (cardIndex - indexStart.value + products.length) % products.length

  const styles = [
    { transform: 'translateX(-160vw)', opacity: 0 },
    { transform: 'translateX(-80vw)', opacity: 0 },
    { transform: 'translateX(0vw) scale(1)', opacity: 1 },
    { transform: 'translateX(75vw)', opacity: 0.5 },
    { transform: 'translateX(150vw)', opacity: 0 }
  ]

  return { ...styles[position], transition: 'all 0.5s ease-in-out', position: 'absolute' }
}

const nextStart = () => indexStart.value = (indexStart.value + 1) % products.length
const prevStart = () => indexStart.value = (indexStart.value - 1 + products.length) % products.length
</script>

<template>
  <div id="products-list" class="mt-15 overflow-x-hidden">
    <h2 class="text-2xl text-[#141D26] font-semibold">{{ title }}</h2>

    <div class="relative mt-5 h-[80vw] flex justify-center items-centers">
      <span class="material-symbols-outlined button-start" id="prev-start" @click="prevStart">arrow_back_ios</span>
      <span class="material-symbols-outlined button-start" id="next-start" @click="nextStart">arrow_forward_ios</span>

      <div v-for="product of products" :key="product.id"
        class="bg-[#D9D9D9] w-[258px] h-[304px] rounded-2xl shadow-xl absolute" :style="getCardStartStyle(product.id)">
        <div class="flex justify-between items-center">
          <span v-if="product.sale" class="material-symbols-outlined ml-3">bookmark</span>
          <span class="material-symbols-outlined m-3">favorite</span>


          <!-- ARRUMAR!
          <span v-if="!product.favorite" class="material-symbols-outlined m-3">favorite</span>
          <span v-else class="material-symbols-outlined m-3 bg-[#C51F5D]">favorite</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#products-list {
  .button-start {
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    background-color: #D9D9D95C;
    font-size: 4vw;
    color: #C51F5D;
    position: absolute;
    cursor: pointer;
    transform: translateY(450%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  #prev-start {
    left: 0vw;
  }

  #next-start {
    right: 0vw;
  }
}
</style>