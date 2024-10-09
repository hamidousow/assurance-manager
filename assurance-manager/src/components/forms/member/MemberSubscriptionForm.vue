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
    if(step.value < steps.length-1) {
        step.value++
    }
    console.log(formStorage.updatedForm)
}
const previousStep = () => {
    if(step.value > 0) {
        step.value--
    }
}
</script>
<template>
    <div>
        <component 
            :is="steps[step]"
            v-bind:formData="formStorage.updatedForm"
        >

        </component>
        <div class="wrapper-buttons">
            <button @click="previousStep()">retour</button>
            <button @click="nextStep()">suivant</button>
        </div>
    </div>
</template>


<style></style>