<script lang="ts" setup>
import useForm from '@/components/composables/useForm';
import { useMemberCreationForm } from '@/stores/memberCreationForm';
import { FormKit } from '@formkit/vue';

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
        <div class="wrapper-fullname">

            <FormKit 
                type="text"
                name="lastname"
                id="lastname"
                label="Nom"
                placeholder="Doe"
                v-model="props.formData.lastname"
            />
            <FormKit 
                type="text"
                name="firstname"
                id="firstname"
                label="Prénom"
                placeholder="John"
                v-model="props.formData.firstname"
            />            
        </div>
        <div class="wrapper-birth-data">
            <FormKit 
                type="date"
                name="dateBirth"
                id="dateBirth"
                label="Date de naissance"
                placeholder="Entrer la date de naissance"
                v-model="props.formData.dateBirth"
            />
            <div class="input-wrapper">
                <FormKit 
                type="select"
                name="birthCountry"
                label="Pays de naissance"
                placeholder="Sélectionner le pays de naissance"
                :options="['France', 'Belgique', 'Sénégal']"
                v-model="props.formData.birthCountry"
                />
            </div>
            <div class="input-wrapper">
                <h3>Genre</h3>
                <FormKit
                    type="radio"
                    name="gender"
                    :options="['masculin', 'feminin']"
                    v-model="props.formData.gender"
                />
            </div>
            <div class="input-wrapper">
                <FormKit 
                    type="select"
                    name="nationality"
                    label="Nationnalité"
                    placeholder="Sélectionner la nationnalité"
                    :options="['France', 'Belgique', 'Sénégal']"
                    v-model="props.formData.nationality"
                />                
            </div>
        </div>
    
</template>


<style></style>