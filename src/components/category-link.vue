<script setup>
import { defineProps } from 'vue';

defineProps(["to", "name", "icon"])
</script>

<template>
  <RouterLink :to="to">
    <li class="grid gap-2 border border-[#141D26] py-5 w-[80px] rounded-md hover:bg-gray-100 transition">
      <span class="material-symbols-outlined text-3xl">{{ icon }}</span>
      <h4 class="text-[10px] text-center">{{ name }}</h4>
    </li>
  </RouterLink>
</template>