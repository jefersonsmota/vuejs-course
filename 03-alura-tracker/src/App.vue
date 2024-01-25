<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue';
import Notificacao from '@/components/Notificacao.vue';
</script>

<template>
  <div class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacao />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.conteudo {
  margin: 8px !important;
}
</style>
