<template>
    <div class="columns">
        <div class="column is-full">
            <FormularioTemporizador @temporizador-finalizado="finalizarTarefa" />
        </div>
    </div>
    <div class="columns">
        <div class="column is-full">
            <FormularioBusca @filtar-busca="filtrar" />
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
import { tarefaStore } from "@/store/TarefaStore";
import FormularioBusca from '@/components/FormularioBusca.vue';

const store = tarefaStore();
let listaTarefas = ref<ITarefa[]>(store.getStore);

function finalizarTarefa(tarefa: any): void {
  store.add(tarefa as ITarefa);
}

function filtrar (busca: any): void {
    listaTarefas.value = store.getStore.filter(x => busca == '' || x.descricao.toLowerCase().includes(busca.toLowerCase()));
}

</script>

<style scoped></style>