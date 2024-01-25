<template>
    <h4 class="title is-4">Novo</h4>
    <div class="columns">
        <div class="column is-full">
            <FormularioProjeto @salvar-projeto="salvarProjeto" />
        </div>
    </div>
    <a @click="router.back()" class="link">voltar</a>
</template>

<script setup lang="ts">
import FormularioProjeto from "@/components/FormularioProjeto.vue";
import type IProjeto from "@/interfaces/IProjeto";
import router from "@/router";
import { projetoStore } from "@/store/ProjetoStore";
import { notificacoesStore } from "@/store/NotificacoesStore";
import { TipoNotificacao } from "@/enums/TipoNotificacao";

const projetos = projetoStore();
const notificacoes = notificacoesStore();

function salvarProjeto(projetoNome: any): void {
    if (projetoNome == '') {
        notificacoes.add({
            titulo: 'Projeto',
            tipo: TipoNotificacao.ATENCAO,
            texto: 'Informe o nome do projeto',
            id: ''
        });

        return;
    }

    const projeto: IProjeto = {
        id: crypto.randomUUID(),
        nome: projetoNome
    };

    projetos.add(projeto);
    notificacoes.add({
        titulo: 'Projeto',
        tipo: TipoNotificacao.SUCESSO,
        texto: 'Projeto salvo com sucesso!',
        id: ''
    })

    router.back();
}

</script>

<style scoped>

</style>