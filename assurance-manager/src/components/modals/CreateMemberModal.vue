<script lang="ts" setup>
import MemberSubscriptionForm from '../forms/member/MemberSubscriptionForm.vue';

const props = defineProps({
    show: Boolean
})

</script>

<template>
    <Transition>
        <div v-if="show" class="modal-mask">
            <div class="modal-container flex flex-col justify-between py-14 px-8">
                <div>
                    <div class="flex flex-row justify-between">
                        <h3 class="uppercase font-bold mb-8">Création d'un nouveau membre</h3>
                        <div class="buttons-wrapper">
                            <input type="button" value="fermer" @click="$emit('close')">
                        </div>
                    </div>
                    <nav class="flex flex-row justify-between gap-1">
                        <div class="flex flex-1 flex-col">
                            <div class="h-1 bg-blue-600 flex rounded-2xl"></div>
                            premier form
                        </div>
                        <div class="flex flex-1 flex-col">
                            <div class="h-1 bg-blue-600 flex"></div>
                            second form
                        </div>
                    </nav>
                </div>
                <MemberSubscriptionForm />
            </div>
        </div>
    </Transition>
</template>

<style>
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
    height: 680px;
    margin: auto;
    background-color: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: .5em;
}

input[type="text"] {
    border-radius: 5px;
    padding: .6em 1em;
}
</style>