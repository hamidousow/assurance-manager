<script setup lang="ts">
import { RouterView } from 'vue-router'
import AsideMenu from './components/AsideMenu.vue';
import Logo from '@/assets/astral-carre-logo.jpg';

const name = 'Hamidou';
const currentDate = new Date().toJSON();

</script>

<template>
  <header id="header">
    <img alt="Vue logo" class="logo" :src="Logo" width="40" height="40" />
    <span>Bonjour {{ name }}</span>
    <span> {{ currentDate }}</span>
  </header>
  <div id="parent">
    <AsideMenu />
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  padding: var(--padding);
}

.logo {
  display: block;
}

#parent {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: calc(100vh - (var(--nav-height) + var(--padding)));
}

@media (min-width: 1024px) {}
</style>
