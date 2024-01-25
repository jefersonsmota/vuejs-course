<template>
    <div class="columns">
        <div class="column is-full">
            <FormularioTemporizador @temporizador-finalizado="finalizarTarefa" />
        </div>
    </div>
    <div class="columns">
        <div class="column is-full">
            <ListaTarefas :tarefas="listaTarefas" />
        </div>
    </div>
</template>

<script setup lang="ts">
import FormularioTemporizador from '@/components/FormularioTemporizador.vue';
import ListaTarefas from '@/components/ListaTarefas.vue';
import { ref } from "vue";
import type ITarefa from '@/interfaces/ITarefa.ts';

const listaTarefas = ref<ITarefa[]>([]);

function finalizarTarefa(tarefa: any): void {
  listaTarefas.value.push(tarefa as ITarefa);
}

</script>

<style scoped></style>