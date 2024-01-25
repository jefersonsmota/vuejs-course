<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempo.toString()" />
        <button class="button" type="button" @click="iniciarTarefa" :disabled="cronometro > 0 || !ativo">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-play" />
            </span>
            <span>play</span>
        </button>
        <button class="button" type="button" @click="finalizarTarefa" :disabled="cronometro == 0">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-stop" />
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons"
import Cronometro from "../components/Cronometro.vue";
import { secondsToHms } from "../services/CronTimer";

library.add(faPlay, faStop);
const emit = defineEmits(['TemporizadorIniciado', 'TemporizadorFinalizado']);

defineProps({
    ativo: {
        type: Boolean, required: false, default: true
    }
});

let tempo = ref<number>(0);
let cronometro = 0;

function iniciarTarefa() {
    cronometro = setInterval(() => { tempo.value++; }, 1000);
    emit('TemporizadorIniciado');
}
function finalizarTarefa() {
    clearInterval(cronometro);

    emit('TemporizadorFinalizado', secondsToHms(tempo.value));

    tempo.value = 0;
    cronometro = 0;
}
</script>

<style scoped></style>