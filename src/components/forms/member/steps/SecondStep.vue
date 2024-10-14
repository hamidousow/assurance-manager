<script lang="ts" setup>
import type { Member } from '@/types/Member';


const props = defineProps<{
    memberData: Member
}>()

</script>
<template>
    <div>
        <div class="flex flex-col gap-y-5 mb-8">
            <div class="wrapper-adress-info flex justify-between gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="doorNumber" class="font-bold"> Numéro de porte </label>
                    <input type="text" placeholder="Saisir numéro de porte" id="doorNumber" class="border p-2 rounded"
                        v-model="props.memberData.address.doorNumber" />
                </div>
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="streetName" class="font-bold">Nom de la rue, avenu, boulevard...</label>
                    <input type="text" placeholder="Nom de la voie" id="streetName" class="border p-2 rounded"
                        v-model="props.memberData.address.streetName" />
                </div>
            </div>
            <div class="complementary-address-info flex gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="complementaryAdressInfo" class="font-bold">Complément d'adresse (optionnel)</label>
                    <input type="text" placeholder="Appartement, étage, bâtiment, boîte postale, etc"
                        id="complementaryAdressInfo" class="border p-2 rounded"
                        v-model="props.memberData.address.complementaryAdressInfo" />
                </div>
            </div>

            <div class="wrapper-city flex justify-between gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="city" class="font-bold">Ville</label>
                    <input type="text" placeholder="saisir la ville" id="city" class="border p-2 rounded"
                        v-model="props.memberData.address.city" />
                </div>
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="zipCode" class="font-bold">Code postal</label>
                    <input type="text" placeholder="code postal" id="zipCode" class="border p-2 rounded"
                        v-model="props.memberData.address.zipCode" />
                </div>
            </div>
            <div class="wrapper-city flex justify-between gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="region" class="font-bold">Région</label>
                    <input type="text" placeholder="saisir la région" id="region" class="border p-2 rounded"
                        v-model="props.memberData.address.region" />
                </div>
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="zipCode" class="font-bold">Pays</label>
                    <select id="country" class="border p-2 rounded" v-model="props.memberData.address.country">
                        <option selected>sélectionner le pays de résidence</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>