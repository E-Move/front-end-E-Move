<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Nicole Ferreira Mello',
  location: { city: "Joinville", CEP: '89230410' },
  img: '/account/user.png'
})

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Produtos', children: ['Bicicletas', 'Motos', 'Patinetes', 'Scooters', 'Skates'] },
  { label: 'Suporte', to: '/' }
]

const closeMenu = () => {

}

const itemsFooter = [
  { title: "Suporte", content: `<p>Email: </p><RouterLink to="/suporte">Ir para a página de Suporte</RouterLink>` },
  { title: "Formas de pagamento", content: ` <ul class="list-disc"><li>Pix</li><li>Cartão - Débito e Crédito</li><li>Boleto</li></ul>` },
  { title: "Produtos", content: `<ul class="list-disc"><li>Bicicletas Elétricas</li><li>Patinetes Elétricos</li><li>Motos Elétricas</li><li>Skates Elétricos</li><li>Scooters Elétricos</li></ul>` },
]
</script>

<template>
  <header class="grid p-5 bg-[#243447] text-white rounded-b-3xl"> <!--header-->

    <!--nav-->
    <nav class="flex justify-between items-center text-xl">

      <!--details-->
      <details class="relative">
        <summary class="list-none cursor-pointer">
          <span class="material-symbols-outlined">menu</span>
        </summary>

        <div id="content"
          class="absolute top-[-6vw] left-[-5vw] w-[290px] h-[650px] bg-white text-black grid justify-center rounded-r-2xl px-10 py-15 shadow-2xl">

          <span class="material-symbols-outlined absolute top-4 left-4" @click="closeMenu">close</span>
          <!--info-account-->
          <div id="account" class="grid justify-center text-center">
            <img :src="user.img" alt="user img" class="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover">
            <h3 class="text-center">{{ user.name }}</h3>
          </div>
          <!--end info-account-->

          <!--items menu-->
          <ul class="grid gap-10 text-center">
            <li v-for="item in menuItems" :key="item.id" class="border-b border-[#929292] pb-2">

              <!--submenu-->
              <div v-if="item.children">
                <details id="submenu">
                  <summary class="flex justify-center items-center list-none cursor-pointer">{{
                    item.label }}
                    <span class="material-symbols-outlined text-[#C51F5D]">keyboard_arrow_down</span>
                  </summary>
                  <ul class="text-left pl-5 pt-2 text-sm">
                    <li v-for="(child, index) in item.children" :key="index">{{ child }}</li>
                  </ul>
                </details>
              </div>
              <!--end submenu-->


              <RouterLink v-else :to="item.to">{{ item.label }}
              </RouterLink>
            </li>
          </ul>
          <!--end items menu-->

        </div>
      </details>
      <!--end details-->

      <img src="" alt="E-MOVE icon" class="h-10">

      <RouterLink to="/"><span class="material-symbols-outlined">shopping_cart</span></RouterLink>
    </nav> <!--end nav-->

    <label class="flex justify-between w-full bg-white text-[#141D26] rounded-2xl px-5 py-3 mt-5 shadow-md">
      <input type="text" placeholder="Buscar..." class="outline-none">
      <span class="material-symbols-outlined">search</span>
    </label>

    <p class="flex gap-2 items-center text-xs text-[#929292] pt-5"><span
        class="material-symbols-outlined">location_on</span>
      <span class="text-white">{{ user.location.city }}</span>, {{
        user.location.CEP }}
    </p>
  </header> <!--end header-->

  <main class="p-5">
    <RouterView />
  </main>

  <footer class="grid justify-center px-5 py-10 rounded-t-3xl text-sm bg-[#243447] text-center text-white">
    <!--footer-->
    <ul class="grid mb-5 gap-3">
      <li v-for="item of itemsFooter" :key="item.id" class="p-3 border-b border-white">
        <details id="items-footer">
          <summary class="flex justify-center items-center list-none">{{ item.title }}
            <span class="material-symbols-outlined text-[#C51F5D]">keyboard_arrow_down</span>
          </summary>
          <div v-html="item.content" class="p-5 px-10 text-left text-xs"></div>
        </details>
      </li>
    </ul>

    <a href=""><i class="fa-brands fa-instagram text-base p-2 text-[#C51F5D]"></i></a>
    <p>&copy;2025 E-MOVE. Direitos reservados.</p>
  </footer> <!--end footer-->
</template>

<style scoped>
#submenu[open] {
  summary {
    color: #C51F50;
  }
}

#items-footer {
  span {
    transition: transform 0.5s ease-in-out;
  }
}

#items-footer[open] {
  span {
    transform: rotate(-180deg);
  }
}
</style>
