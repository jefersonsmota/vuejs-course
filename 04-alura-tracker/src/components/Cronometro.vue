<template>
    <section>
        <strong>{{ secondsToHms(tempoEmSegundos) }}</strong>
    </section>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { secondsToHms } from "../services/CronTimer";

const props = defineProps({
    tempoEmSegundos: {
        type: String,
        required: true
    }
});
</script>