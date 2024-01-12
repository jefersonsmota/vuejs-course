<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import ListaTarefas from './components/ListaTarefas.vue';
import {ref} from "vue";
import type ITarefa from './interfaces/ITarefa.ts';

const listaTarefas = ref<ITarefa[]>([]);

function finalizarTarefa(tarefa: any): void {
  listaTarefas.value.push(tarefa as ITarefa);
}

</script>

<template>
  <div class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <div class="columns">
          <div class="column is-full">
            <Formulario @temporizador-finalizado="finalizarTarefa" />
          </div>
  
        </div>
        <div class="columns">
          <div class="column is-full">
            <ListaTarefas :tarefas="listaTarefas"/>
          </div>
        </div>

    </div>
  </div>
</template>

<style scoped></style>
