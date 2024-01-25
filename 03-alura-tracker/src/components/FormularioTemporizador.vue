<script lang="ts" setup>
import { ref, defineEmits, defineModel, type PropType, type Ref } from "vue";
import Temporizador from "./Temporizador.vue";
import { projetoStore } from "@/store/ProjetoStore";
import type IProjeto from "@/interfaces/IProjeto";

const emit = defineEmits(['TemporizadorFinalizado']);
const store = projetoStore();

let tarefa = ref<string>('');
let temporizadorIniciado = ref<boolean>(false);
let projetos = ref<IProjeto[]>(store.getStore || []);
let projetoSelecionado = ref<IProjeto>();

function finalizarTarefa(tempo: any): void {

    var task = { descricao: tarefa.value.trim(), tempo, projeto: projetoSelecionado.value };
    emit('TemporizadorFinalizado', task);

    console.log(task);
    
    temporizadorIniciado.value = false;
    tarefa.value = '';
    projetoSelecionado.value = undefined;
}

</script>
<template>
 <div class="box">
    <div class="columns">
        <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
            <input type="text" v-model="tarefa" name="tarefa" id="tarefa" class="input" placeholder="Qual tarefa você deseja iniciar?" :disabled="temporizadorIniciado">
        </div>
        <div class="column is-3">
            <div class="select">
                <select v-model="projetoSelecionado" title="projeto" :disabled="temporizadorIniciado">
                    <option disabled selected>Selecione o projeto</option>
                    <option v-for="projeto in projetos" :key="projeto.id" :value="projeto">{{ projeto.nome }}</option>
                </select>
            </div>
        </div>
        <div class="column is-4">
            <Temporizador :ativo="tarefa.trim() != '' && projetoSelecionado != undefined" @temporizador-finalizado="finalizarTarefa" @temporizador-iniciado="temporizadorIniciado = true" />
        </div>
    </div>
 </div>   
</template>
<style scoped>
</style>