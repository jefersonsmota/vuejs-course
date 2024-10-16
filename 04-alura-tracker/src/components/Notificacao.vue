<template>
    <div class="notificacoes">
        <article v-for="notificacao of notificacoes" class="message" :class="notificacao.tipo">
          <div class="message-header">
            <p>{{ notificacao.titulo }}</p>
          </div>
          <div class="message-body">
            {{ notificacao.texto }}
          </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import type INotificacao from "@/interfaces/INotificacao";
import { ref } from "vue";
import { notificacoesStore } from "@/store/NotificacoesStore";

const store = notificacoesStore();
const notificacoes = ref<INotificacao[]>(store.getStore);

</script>

<style scoped>
.notificacoes {
    position: absolute;
    width: 400px;
    padding: 1px;
    z-index: 10000;
    right: 0;
}
</style>