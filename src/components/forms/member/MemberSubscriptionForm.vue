<script lang="ts" setup>
import { ref } from 'vue';
import FirstStep from './steps/FirstStep.vue';
import SecondStep from './steps/SecondStep.vue';
import FinalStep from './steps/FinalStep.vue';
import useForm from '../../composables/useForm';
import { useMember } from '@/stores/member';

const memberStore = useMember()

const steps = [
    FirstStep,
    SecondStep,
    FinalStep,
]

const step = ref(0);

const nextStep = () => {
    if (step.value < steps.length - 1) {
        step.value++
    }
}
const previousStep = () => {
    if (step.value > 0) {
        step.value--
    }
}

const createMember = async (fields: any) => {
    memberStore.$saveMember()
    await new Promise((r) => setTimeout(r, 1000))
    alert(JSON.stringify(fields))
}

</script>
<template>
    <div>
        <component :is="steps[step]" v-bind:memberData="memberStore.getMember">
        </component>
        <div class="wrapper-buttons flex flex-row justify-between items-end">
            <button :disabled="steps[step].__name === 'FirstStep'" class="bg-blue-600 py-2 px-10 rounded text-white"
                @click="previousStep()">retour
            </button>

            <button v-if="steps[step].__name !== 'FinalStep'" class="bg-blue-600 py-2 px-10 rounded text-white"
                @click="nextStep()">suivant
            </button>

            <button v-if="steps[step].__name === 'FinalStep'" class="bg-blue-600 py-2 px-10 rounded text-white"
                @click="createMember(memberStore.getMember)">Créer
                membre</button>
        </div>
    </div>

</template>


<style></style>