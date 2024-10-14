<script lang="ts" setup>
import MemberViewForm from '@/components/forms/member/MemberViewForm.vue';
import IconFilter from '@/components/icons/IconFilter.vue';
import MembersTab from '@/components/MembersTab.vue';
import CreateMemberModal from '@/components/modals/CreateMemberModal.vue';
import { useMember } from '@/stores/memberStore';
import { ref, Teleport } from 'vue';


const showModal = ref(false);
const memberStore = useMember()

const closeModal = () => {
    memberStore.$reset()
    showModal.value = false
}

// const openModal = () => {
//     memberStore.$reset()
//     showModal.value = true
// }

</script>
<template>
    <div>
        <div id="wrapper">
            <div class="title-wrapper">
                <h1>Membres</h1>
                <input type="button" id="button-create" @click="showModal = true" value="+ Nouveau">
            </div>
            <div id="search-wrapper">
                <input type="search" name="" id="search-bar" placeholder="rechercher un membre par id, nom, prénom..">
                <div class="flex flex-row gap-2 px-2 py-1">
                    <IconFilter /> Filtres
                </div>
            </div>

            <MembersTab />
        </div>
        <Teleport to="body">
            <CreateMemberModal :show="showModal" @close="closeModal"/>
        </Teleport>
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
    font-weight: 600;
    color: var(--color-white);
    padding: .5rem 1.5rem;
}
</style>