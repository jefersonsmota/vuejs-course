<script lang="ts" setup>
import type ITarefa from '@/interfaces/ITarefa';
import { defineProps, type PropType } from 'vue';

const props = defineProps({
    tarefas: { type: Array<ITarefa>, default: [] }
});

</script>
<template>
    <div class="box paragrafo" v-show="props.tarefas?.length <= 0">
        <span>Lista vazia</span>
    </div>
    <table class="table is-fullwidth is-hoverable" v-show="props.tarefas?.length > 0">
        <thead>
            <th>Tarefa</th>
            <th>Tempo</th>
            <th>Projeto</th>
        </thead>
        <tbody>
            <tr v-for="tarefa in props.tarefas" :key="tarefa.descricao">
                <td>{{ tarefa.descricao }}</td>
                <td>{{ tarefa.tempo }}</td>
                <td>{{ tarefa.projeto.nome }}</td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
table {
    margin: auto;
    width: 100%;
}

.paragrafo {
    text-align: center;
}
</style>