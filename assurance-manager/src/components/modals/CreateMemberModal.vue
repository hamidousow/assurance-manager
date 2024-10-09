<script lang="ts" setup>
import MemberSubscriptionForm from '../forms/member/MemberSubscriptionForm.vue';



const props = defineProps({
    show: Boolean
})

</script>

<template>
    <Transition>
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <MemberSubscriptionForm />
                <div class="buttons-wrapper">
                    <input type="button" value="annuler" @click="$emit('close')">
                </div>
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
    width: 300px;
    margin: auto;
    padding: 20px 30px;
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