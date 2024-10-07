<script setup>
    const model = defineModel()
    
</script>


<template>
    <div class="input-wrapper">
        <label for="name">Nom</label>
        <input type="text" placeholder="entrer le nom" id="name" />
    </div>
</template>

<style scoped>
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