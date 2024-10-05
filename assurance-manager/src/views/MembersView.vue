<script lang="ts" setup>
import IconFilter from '@/components/icons/IconFilter.vue';
import MembersTab from '@/components/MembersTab.vue';
import { ref } from 'vue';

const pageTitle = ref('');

</script>
<template>
    <div id="wrapper">
        <div class="title-wrapper">
            <h1>Membres</h1>
            <a href="/members" id="button-create">+ Nouveau</a>
        </div>
        <div id="search-wrapper">
            <input type="search" name="" id="search-bar" placeholder="rechercher un membre par id, nom, prénom..">
            <div> <IconFilter /> Filtres</div>
        </div>
        <MembersTab />
    </div>
</template>

<style scoped>
#wrapper {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 1.8rem;
}

.title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

h1 {
    font-size: 1.2rem;
    font-weight: 700;
}

#search-wrapper {
    display: flex;
    flex-direction: row;
    place-items: center;
}

#search-bar {
    height: 2.5rem;
    width: 22em;
    background-color: #efefef;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: .5rem;
    margin-right: 2em;
}

#button-create {
    background-color: var(--color-green);
    border-radius: 5px;
    text-align: center;
    font-size: 1em;
    font-weight: 700;
    color: var(--color-white);
    padding: .5rem 1.5rem;
}
</style>