<script lang="ts" setup>
import { ref } from 'vue';
import FirstStep from './steps/FirstStep.vue';
import SecondStep from './steps/SecondStep.vue';
import FinalStep from './steps/FinalStep.vue';
import useForm from '../../composables/useForm';
import { useMember } from '@/stores/memberStore';
import type { Member } from '@/types/Member';

const memberStore = useMember()

const props = defineProps<{
    member: Member
}>()

</script>
<template>
    <FirstStep :memberData="props.member" />
    <SecondStep :memberData="props.member" />
</template>


<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 1200px;
    /* height: 680px; */
    margin: auto;
    background-color: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}
</style>