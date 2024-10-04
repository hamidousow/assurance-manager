<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const name = 'Hamidou';
const currentDate = new Date().toJSON();
</script>

<template>
  <header id="header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    <span>Bonjour {{ name }}</span>
    <span> {{ currentDate }}</span>
  </header>
  <div id="parent">

    <aside id="aside">
        <nav>
          <ul>
            <li>
              <RouterLink to="/">Home</RouterLink></li>
            <li> 
              <RouterLink to="/members">Membres</RouterLink> 
            </li>
            <li>
              <RouterLink to="/contrats">Contrats</RouterLink>  
            </li>
            <li> 
              <RouterLink to="/archives">Archives</RouterLink> 
            </li>
          </ul>
        </nav>
      </aside>  
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
}

.logo {
  display: block;
}

#parent {
  height: calc(100vh - (var(--nav-height) + var(--padding)));
}

nav {
  width: 100%;
  height: var(--nav-height);
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav ul {
  padding: 0;
}

nav ul li {
  list-style: none;
  text-align: left;
}

#aside {
  border-right: 1px solid var(--color-grey);
  height: 100%;
}


@media (min-width: 1024px) {
  
}
</style>
