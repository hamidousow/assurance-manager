<script lang="ts" setup>
import { useMember } from '@/stores/member';
import { onMounted } from 'vue';

const memberStore = useMember();

memberStore.$getAllMember();



</script>
<template>
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="select-all-members" />
                </th>
                <th> id </th>
                <th> nom </th>
                <th> prénom </th>
                <th> type contrat </th>
                <th> status échéance </th>
            </tr>
        </thead>
        <tbody>
            <div v-if="memberStore.getAllMembers.length === 0">Aucun membre.</div>
            <tr v-for="member in memberStore.getAllMembers" :key="member.email">
                <td data-name="selected"><input type="checkbox" name="member" /></td>
                <td data-name="id">2</td>
                <td data-name="lastname">{{ member.lastname }}</td>
                <td data-name="firstname">{{ member.firstname }}</td>
                <td data-name="contract">Jeune</td>
                <td data-name="status">
                    <div class="dot"></div>
                    <span>À jour</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>


<style scoped>
table {
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    border: none;

}

table th {
    background: rgb(238, 238, 238);
    background: linear-gradient(180deg, rgba(238, 238, 238, 1) 0%, rgba(238, 238, 238, 0) 100%);
    font-weight: 700;
    text-transform: uppercase;
    padding: 1.4rem;
}

table td {
    background: var(--clr-white);
    text-transform: capitalize;
    padding: .8rem 1.4rem;
}

td[data-name="status"] {
    display: flex;
    flex-direction: row;
    place-items: center;
    gap: .5rem;
}

.dot {
    background-color: var(--color-green-status);
    width: 8px;
    height: 8px;
    border-radius: 100%;
}
</style>