<script lang="ts" setup>

const props = defineProps<{
    memberData: {
        typeContract: string,
        statusDeadline: boolean
    }
}>()
</script>
<template>
    <div>

        <div>( page de paiement avant enregistrement du client )</div>
        <div>
            <div class="flex flex-col gap-y-5 mb-8">
                <div class="wrapper-fullname flex justify-between gap-x-4">
                    <div class="input-wrapper flex-1">
                        <label for="typeContract">Type de contrat</label>
                        <select id="typeContract" class="border p-2 rounded" v-model="props.memberData.typeContract">
                            <option>sélectionner le type de contrat</option>
                            <option value="Jeune">Jeune</option>
                            <option value="Famille">Famille</option>
                        </select>
                    </div>

                    <div class="input-wrapper flex-1">
                        <h3>Status</h3>
                        <div class="input-wrapper">
                            <label>
                                <input type="radio" name="statusDeadline" value="homme" class="me-5"
                                    v-model="props.memberData.statusDeadline">À jour
                            </label>
                            <label>
                                <input type="radio" name="statusDeadline" value="femme" class="me-5"
                                    v-model="props.memberData.statusDeadline">Incomplet
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>