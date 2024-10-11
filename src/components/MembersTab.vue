<script lang="ts" setup>
import { useMember } from '@/stores/memberStore';
import { onMounted, ref } from 'vue';

const memberStore = useMember();

memberStore.$getAllMembers();

const isPaymentCompleteClass = ref('color-valide');
const incompleteClasse = ref('color-danger');

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
                <th data-name="status"> status échéance </th>
            </tr>
        </thead>
        <tbody>
            <div v-if="memberStore.getAllMembers.length === 0">Aucun membre.</div>
            <tr v-else v-for="member in memberStore.getAllMembers" :key="member.email">
                <td data-name="selected"><input type="checkbox" name="member" /></td>
                <td data-name="id">2</td>
                <td data-name="lastname">{{ member.lastname }}</td>
                <td data-name="firstname">{{ member.firstname }}</td>
                <td data-name="contract">{{ member.contract.type }}</td>
                <td data-name="status" class="flex justify-center">
                    <div class="badge py-1 px-2 rounded"
                        :class="[member.contract.isPaymentComplete ? 'color-valid' : 'color-danger']">
                        <span class="text-xs"> {{ member.contract.isPaymentComplete ? 'À jour' : 'Incomplet' }}</span>
                    </div>
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

table th[data-name="status"] {
    /* gap: .5rem; */
    text-align: center !important;
}

.badge {
    background-color: var(--color-green-status);
}

.color-valid {
    background-color: var(--color-green-status);
    color: #ffffff;
}

.color-danger {
    background-color: var(--color-danger-status);
    color: #ffffff;
}
</style>