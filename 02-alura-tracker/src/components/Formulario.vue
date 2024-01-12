<script lang="ts" setup>
import { ref, defineEmits, defineModel, type PropType, type Ref } from "vue";
import Temporizador from "./Temporizador.vue";

const emit = defineEmits(['TemporizadorFinalizado']);

let tarefa = ref<string>('');
let temporizadorIniciado = ref<boolean>(false);

function finalizarTarefa(tempo: any): void {

    emit('TemporizadorFinalizado', { descricao: tarefa.value.trim(), tempo });
    
    temporizadorIniciado.value = false;
    tarefa.value = '';
}

</script>
<template>
 <div class="box">
    <div class="columns">
        <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
            <input type="text" v-model="tarefa" name="tarefa" id="tarefa" class="input" placeholder="Qual tarefa você deseja iniciar?" :disabled="temporizadorIniciado">
        </div>
        <div class="column">
            <Temporizador :ativo="tarefa.trim() != ''" @temporizador-finalizado="finalizarTarefa" @temporizador-iniciado="temporizadorIniciado = true" />
        </div>
    </div>
 </div>   
</template>
<style scoped>
</style>