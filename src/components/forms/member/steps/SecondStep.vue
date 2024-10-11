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
                <div class="input-wrapper flex-1">
                    <label for="doorNumber"> Numéro de porte </label>
                    <input type="text" placeholder="Saisir numéro de porte" id="doorNumber" class="border p-2 rounded"
                        v-model="props.memberData.address.doorNumber" />
                </div>
                <div class="input-wrapper flex-1">
                    <label for="streetName">Nom de la rue, avenu, boulevard...</label>
                    <input type="text" placeholder="Nom de la voie" id="streetName" class="border p-2 rounded"
                        v-model="props.memberData.address.streetName" />
                </div>
            </div>
            <div class="complementary-address-info flex gap-x-4">
                <div class="input-wrapper flex-1">
                    <label for="complementaryAdressInfo">Complément d'adresse (optionnel)</label>
                    <input type="text" placeholder="Appartement, étage, bâtiment, boîte postale, etc"
                        id="complementaryAdressInfo" class="border p-2 rounded"
                        v-model="props.memberData.address.complementaryAdressInfo" />
                </div>
            </div>

            <div class="wrapper-city flex justify-between gap-x-4">
                <div class="input-wrapper flex-1">
                    <label for="city">Ville</label>
                    <input type="text" placeholder="saisir la ville" id="city" class="border p-2 rounded"
                        v-model="props.memberData.address.city" />
                </div>
                <div class="input-wrapper flex-1">
                    <label for="zipCode">Code postal</label>
                    <input type="text" placeholder="code postal" id="zipCode" class="border p-2 rounded"
                        v-model="props.memberData.address.zipCode" />
                </div>
            </div>
            <div class="wrapper-city flex justify-between gap-x-4">
                <div class="input-wrapper flex-1">
                    <label for="region">Région</label>
                    <input type="text" placeholder="saisir la région" id="region" class="border p-2 rounded"
                        v-model="props.memberData.address.region" />
                </div>
                <div class="input-wrapper flex-1">
                    <label for="zipCode">Pays</label>
                    <select id="country" class="border p-2 rounded" v-model="props.memberData.address.country">
                        <option value="" selected>sélectionner le pays de résidence</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>