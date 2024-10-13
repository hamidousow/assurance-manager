<script lang="ts" setup>

    const props = defineProps(['type', 'value', 'class'])

</script>

<template>
    <input :type="props.type" :value="props.value" :class="props.class +' py-2 px-10 rounded font-medium'">
</template>

<style scoped>


</style>