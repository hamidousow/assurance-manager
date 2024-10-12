<script lang="ts" setup>
import type { Member } from '@/types/Member';

// const formStorage = useMemberCreationForm()
const props = defineProps<{
    memberData: Member
}>()

</script>
<template>
    <div>
        <div class="flex flex-col gap-y-5 mb-8">
            <div class="wrapper-fullname flex justify-between gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2 ">
                    <label for="lastname" class="font-bold"> Nom </label>
                    <input type="text" placeholder="entrer le nom" id="lastname" class="border p-2 rounded"
                        v-model="props.memberData.lastname" />
                </div>
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="firstname" class="font-bold">Prénom</label>
                    <input type="text" placeholder="entrer le prénom" id="firstname" class="border p-2 rounded"
                        v-model="props.memberData.firstname" />
                </div>
            </div>
            <div class="wrapper-birth-data flex flex-row flex gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="dateBirth" class="font-bold">Date de naissance</label>
                    <input type="date" id="dateBirth" name="date-birth" class="border p-2 rounded"
                        v-model="props.memberData.dateBirth" />
                </div>
                
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="birthCountry" class="font-bold">Pays de naissance</label>
                    <select id="birthCountry" class="border p-2 rounded" v-model="props.memberData.birthCountry">
                        <option value="" selected>sélectionner le pays de naissance</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
                
            </div>
            <div class="wrapper-gender-origin flex gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <h3 class="font-bold">Genre</h3>
                    <div class="input-wrapper flex flex-col">
                        <label>
                            <input type="radio" name="gender" value="homme" class="me-5"
                                v-model="props.memberData.gender">Homme
                        </label>
                        <label>
                            <input type="radio" name="gender" value="femme" class="me-5"
                                v-model="props.memberData.gender">Femme
                        </label>
                    </div>
                </div>
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="nationality" class="font-bold">Nationnalité</label>
                    <select id="nationality" class="border p-2 rounded" v-model="props.memberData.nationality">
                        <option value="">sélectionner la nationnalité</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
            </div>
            <div class="wrapper-fullname flex justify-between gap-x-4">
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="email" class="font-bold"> Email </label>
                    <input type="email" placeholder="saisir une adresse email" id="email" class="border p-2 rounded"
                        v-model="props.memberData.email" required />
                </div>
                <div class="input-wrapper flex flex-col flex-1 gap-2">
                    <label for="phone" class="font-bold">Téléphone</label>
                    <input type="tel" placeholder="saisir le numero de téléphone" id="phone" class="border p-2 rounded"
                        v-model="props.memberData.phoneNumber" required />
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>