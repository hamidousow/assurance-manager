<script lang="ts" setup>
import { ref } from 'vue';
import FirstStep from './steps/FirstStep.vue';
import SecondStep from './steps/SecondStep.vue';
import FinalStep from './steps/FinalStep.vue';
import useForm from '../../composables/useForm';
import { useMemberCreationForm } from '@/stores/memberCreationForm';

const formStorage = useMemberCreationForm()

const steps = [
    FirstStep,
    SecondStep,
    FinalStep
]

const step = ref(0);

const nextStep = () => {
    if (step.value < steps.length - 1) {
        step.value++
    }
    console.log(formStorage.updatedForm)
}
const previousStep = () => {
    if (step.value > 0) {
        step.value--
    }
}

const createMember = async (fields: any) => {
    await new Promise((r) => setTimeout(r, 1000))
    alert(JSON.stringify(fields))
}

</script>
<template>
    <FormKit type="form" @submit="createMember" submit-label="Créer Membre">
        <component :is="steps[step]" v-bind:formData="formStorage.updatedForm">
        </component>
        <div class="wrapper-buttons">
            <button @click="previousStep()">retour</button>
            <button @click="nextStep()">suivant</button>
        </div>
    </FormKit>
</template>


<style></style>