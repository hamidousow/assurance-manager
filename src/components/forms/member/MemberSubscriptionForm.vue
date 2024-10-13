<script lang="ts" setup>
import { ref } from 'vue';
import FirstStep from './steps/FirstStep.vue';
import SecondStep from './steps/SecondStep.vue';
import FinalStep from './steps/FinalStep.vue';
import useForm from '../../composables/useForm';
import { useMember } from '@/stores/memberStore';
import type { Member } from '@/types/Member';

const props = defineProps<{
    isModalOpen: boolean
}>()

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
                @click="$emit('create')">Créer
                membre</button>
        </div>
    </div>

</template>


<style></style>