<script setup lang="ts">
import { RouterView } from 'vue-router'
import AsideMenu from './components/AsideMenu.vue';
import Logo from '@/assets/astral-carre-logo.jpg';
import Avatar from '@/assets/avatar.svg';
import IconArrowDown from './components/icons/IconArrowDown.vue';
import { ref } from 'vue';

const name = 'Admin';
const currentDate = new Date().toJSON();

const isAdminMenuOpen = ref(false);

function openAdminMenu() {
  isAdminMenuOpen.value = !isAdminMenuOpen.value
}

</script>

<template>
  <header id="header">
    <img alt="Vue logo" class="logo" :src="Logo" width="40" height="40" />
    <h3 class="font-bold">Bonjour {{ name }}</h3>
    <div class="admin-button-container relative">
      <button type="button" id="user-menu " class="flex flex-row " @click="openAdminMenu">
        <img :src="Avatar" alt="avatar" srcset="" class="rounded-full">
        <div class="flex flex-col my-auto mx-5">
          <h5>Admin ADMIN</h5>
          <small>Admin</small>
        </div>
        <IconArrowDown class="my-auto" />
      </button>
      <menu v-if="isAdminMenuOpen" id="admin-menu" class="flex flex-col absolute right-0 bg-white border rounded w-full mt-6">
        
          <RouterLink to="/" class="p-3 hover:fill-gray-400">Paramètres</RouterLink>
        
          <RouterLink to="/" class="p-3 hover:fill-gray-400">Se déconnecter</RouterLink>
        
      </menu>
    </div>
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
