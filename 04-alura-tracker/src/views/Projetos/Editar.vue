<template>
    <h4 class="title is-4">Editar</h4>
    <div class="columns">
        <div class="column is-full">
            <FormularioProjeto @salvar-projeto="salvarProjeto" @excluir-projeto="excluirProjeto" :nome-projeto="projeto?.nome" :exibir-ecluir="true" />
        </div>
    </div>
    <a @click="router.back()" class="link">voltar</a>
</template>

<script setup lang="ts">
import FormularioProjeto from "@/components/FormularioProjeto.vue";
import type IProjeto from "@/interfaces/IProjeto";
import router from "@/router";
import { projetoStore } from "@/store/ProjetoStore";
import { defineProps, ref } from "vue";

const store = projetoStore();
const props = defineProps({
    id: { type: String, required: true }
});

let projeto = ref<IProjeto>(store.getStore.find(x => x.id == props.id)!);

function salvarProjeto(projetoNome: any) {
    projeto.value.nome = projetoNome;
    
    store.edit(projeto.value);
    router.back();
}

function excluirProjeto() {
    store.remove(projeto.value.id);
    router.back();
}

</script>

<style scoped>

</style>