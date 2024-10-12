<script lang="ts" setup>

import { useMember } from '@/stores/memberStore';
import type { Member } from '@/types/Member';

const memberStore = useMember()

const props = defineProps<{
    member: Member
}>()

</script>

<template>
    <div>
        {{ member.firstname + ' ' + member.lastname }}
    </div>
</template>



<style></style>