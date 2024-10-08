<script lang="ts" setup>
import { ref } from 'vue';
import FirstStep from './steps/FirstStep.vue';
import SecondStep from './steps/SecondStep.vue';
import FinalStep from './steps/FinalStep.vue';
import useForm from '../composables/MemberSubscriptionFormValues';

const {
    values
} = useForm()

const steps = [
    FirstStep,
    SecondStep,
    FinalStep
]

const step = ref(0);

const firstStep = FirstStep;

const nextStep = () => {
    if(step.value < steps.length-1) {
        step.value++
    }
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
        :bind:formValues="values"
        >

        </component>
        <div class="wrapper-buttons">

            <button @click="previousStep()">retour</button>
            <button @click="nextStep()">suivant</button>
        </div>
    </div>
</template>


<style></style>