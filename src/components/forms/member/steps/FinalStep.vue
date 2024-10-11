<script lang="ts" setup>
import type { Member } from '@/types/Member';


const props = defineProps<{
    memberData: Member
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
                        <select id="typeContract" class="border p-2 rounded" v-model="props.memberData.contract.type">
                            <option>sélectionner le type de contrat</option>
                            <option value="JEUNE">Jeune</option>
                            <option value="FAMILLE">Famille</option>
                        </select>
                    </div>

                    <div class="input-wrapper flex-1">
                        <h3>Status</h3>
                        <div class="input-wrapper">
                            <label>
                                <input type="checkbox" name="statusDeadline" value="0" class="me-5"
                                    v-model="props.memberData.contract.isPaymentComplete">À jour
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>