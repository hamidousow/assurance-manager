<script lang="ts" setup>

import { useMember } from '@/stores/memberStore';

const memberStore = useMember()


</script>

<template>
    <div>
        {{ member.firstname + ' ' + member.lastname }}
    </div>
</template>



<style></style>