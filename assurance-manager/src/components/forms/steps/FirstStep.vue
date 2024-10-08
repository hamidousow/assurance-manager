<script lang="ts" setup>
import useForm from '@/components/composables/useForm';
import { useMemberCreationForm } from '@/stores/memberCreationForm';

// const formStorage = useMemberCreationForm()
const props = defineProps<{
    formData: {        
        firstname: string
        lastname: string
        dateBirth: string
        birthCountry: string
        gender: string
        nationality: string
    }
}>()

</script>
<template>
    <form action="">
        <div class="wrapper-fullname">
            <div class="input-wrapper">
                <label for="lastname"> Nom </label>
                <input type="text" placeholder="entrer le nom" id="lastname" v-model="props.formData.lastname"/>
            </div>
            <div class="input-wrapper">
                <label for="firstname">Prénom</label>
                <input type="text" placeholder="entrer le nom" id="firstname" v-model="props.formData.firstname"/>
            </div>
        </div>
        <div class="wrapper-birth-data">
            <div class="input-wrapper">
                <label for="dateBirth">Date de naissance</label>
                <input type="date" id="dateBirth" name="date-birth" v-model="props.formData.dateBirth"/>
            </div>
            <div class="input-wrapper">
                <div class="input-wrapper">
                    <label for="birthCountry">Pays de naissance</label>
                    <select id="birthCountry" v-model="props.formData.birthCountry">
                        <option value="sélectionner le pays de naissance">sélectionner le pays de naissance</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
            </div>
            <div class="input-wrapper">
                <h3>Genre</h3>
                <div class="input-wrapper">
                    <label for="gender">
                        <input type="radio" name="gender" id="gender" value="homme" v-model="props.formData.gender" checked>Homme
                    </label>                    
                    <label for="gender">
                        <input type="radio" name="gender" id="gender" value="femme" v-model="props.formData.gender">Femme
                    </label>

                </div>
            </div>
            <div class="input-wrapper">
                <div class="input-wrapper">
                    <label for="nationality">Nationnalité</label>
                    <select id="nationality" v-model="props.formData.nationality">
                        <option value="sélectionner le pays de naissance">sélectionner la nationnalité</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
            </div>
        </div>
    </form>
</template>


<style></style>