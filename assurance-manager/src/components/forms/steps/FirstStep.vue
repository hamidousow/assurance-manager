<script lang="ts" setup>

const props = defineProps(['formValues']);
</script>
<template>
    <form action="">
        <div class="wrapper-fullname">
            <div class="input-wrapper">
                <label for="name">Nom</label>
                <input type="text" placeholder="entrer le nom" id="name" />
            </div>
            <div class="input-wrapper">
                <label for="name">Prénom</label>
                <input type="text" placeholder="entrer le nom" id="firstname" />
            </div>
        </div>
        <div class="wrapper-birth-data">
            <div class="input-wrapper">
                <label for="name">Date de naissance</label>
                <input type="text" placeholder="entrer le nom" id="lastname" />
            </div>
            <div class="input-wrapper">
                <div class="input-wrapper">
                    <label for="name">Pays de naissance</label>
                    <select id="country">
                        <option value="sélectionner le pays de naissance">sélectionner le pays de naissance</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                    </select>
                </div>
            </div>
            <div class="input-wrapper">
                <h3>Genre</h3>
                <div class="input-wrapper">
                    <label for="name">
                        <input type="radio" name="gender" id="gender"> Homme
                    </label>
                    <label for="name">
                        <input type="radio" name="gender" id="gender">Femme
                    </label>

                </div>
            </div>
        </div>
    </form>
</template>


<style></style>