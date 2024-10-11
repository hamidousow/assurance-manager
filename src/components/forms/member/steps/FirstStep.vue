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
                <div class="input-wrapper flex-1">
                    <label for="lastname"> Nom </label>
                    <input type="text" placeholder="entrer le nom" id="lastname" class="border p-2 rounded"
                        v-model="props.memberData.lastname" />
                </div>
                <div class="input-wrapper flex-1">
                    <label for="firstname">Prénom</label>
                    <input type="text" placeholder="entrer le prénom" id="firstname" class="border p-2 rounded"
                        v-model="props.memberData.firstname" />
                </div>
            </div>
            <div class="wrapper-birth-data flex gap-x-4">
                <div class="input-wrapper flex-1">
                    <label for="dateBirth">Date de naissance</label>
                    <input type="date" id="dateBirth" name="date-birth" class="border p-2 rounded"
                        v-model="props.memberData.dateBirth" />
                </div>
                <div class="input-wrapper flex-1">
                    <div class="input-wrapper">
                        <label for="birthCountry">Pays de naissance</label>
                        <select id="birthCountry" class="border p-2 rounded" v-model="props.memberData.birthCountry">
                            <option value="" selected>sélectionner le pays de naissance</option>
                            <option value="France">France</option>
                            <option value="Belgique">Belgique</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="wrapper-gender-origin flex gap-x-4">
                <div class="input-wrapper flex-1">
                    <h3>Genre</h3>
                    <div class="input-wrapper">
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
                <div class="input-wrapper flex-1">
                    <label for="nationality">Nationnalité</label>
                    <select id="nationality" class="border p-2 rounded" v-model="props.memberData.nationality">
                        <option value="">sélectionner la nationnalité</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
            </div>
            <div class="wrapper-fullname flex justify-between gap-x-4">
                <div class="input-wrapper flex-1">
                    <label for="email"> Email </label>
                    <input type="email" placeholder="saisir une adresse email" id="email" class="border p-2 rounded"
                        v-model="props.memberData.email" required />
                </div>
                <div class="input-wrapper flex-1">
                    <label for="phone">Téléphone</label>
                    <input type="tel" placeholder="saisir le numero de téléphone" id="phone" class="border p-2 rounded"
                        v-model="props.memberData.phoneNumber" required />
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>