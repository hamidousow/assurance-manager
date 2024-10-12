<script lang="ts" setup>
import { string } from '@vueform/vueform';
import MemberViewForm from '../forms/member/MemberViewForm.vue';
import type { Member } from '@/types/Member';
import IconClose from '../icons/IconClose.vue';

const props = defineProps<{
    show: Boolean,
    title: string,
    member: Member
}>()

</script>

<template>
    <Transition>
        <div class="modal-mask" v-if="show">
            <div class="modal-container py-14 px-8">
                <div class="flex flex-row justify-between">
                    <h2>{{ props.title }}</h2>
                    <button @click="$emit('close')"> <IconClose /> </button>
                </div>
                <MemberViewForm :member="props.member" />
            </div>
        </div>
    </Transition>
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
    width: 600px;
    /* height: 680px; */
    margin: auto;
    background-color: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}
</style>