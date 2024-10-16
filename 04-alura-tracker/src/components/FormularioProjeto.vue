<template>
<div class="box">
    <label for="nome" class="label">Nome do Projeto</label>
    <div class="columns">
        <div class="column is-three-quarters" role="form" aria-label="Formulário para criação de um novo Projeto">
            <input type="text" v-model="nome" name="nome" id="nome" class="input" placeholder="Adicione um nome projeto">
        </div>
        <div class="column">
            <button class="button is-info" type="button" @click="salvarProjeto">
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-save" />
                </span>
                <span>Salvar</span>
            </button>
        </div>
        <div class="column" v-if="exibirEcluir">
            <button class="button is-danger" type="button" @click="excluirProjeto">
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-remove" />
                </span>
                <span>Excluir</span>
            </button>
        </div>
    </div>
 </div>   
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSave, faRemove } from "@fortawesome/free-solid-svg-icons"

library.add(faSave, faRemove);
const emit = defineEmits(["SalvarProjeto", "ExcluirProjeto"]);

const props = defineProps({
    nomeProjeto: { type: String, default: '', required: false },
    exibirEcluir: { type: Boolean, default: false, required: false }
});

const nome = ref<string>(props.nomeProjeto || '')

function salvarProjeto() {
    emit('SalvarProjeto', nome.value);   
}

function excluirProjeto() {
    emit('ExcluirProjeto');   
}
</script>

<style scoped>
.box .columns {
    align-content: first baseline;
}
</style>