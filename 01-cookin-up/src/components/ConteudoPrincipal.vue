<script setup lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import MostrarReceitas from './MostrarReceitas.vue';
import SuaLista from './SuaLista.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarConteudo';

const ingredientes = ref<string[]>([]);
const conteudo = ref<Pagina>('SelecionarIngredientes');

function adicionarIngrediente(ingrediente: string) {
  ingredientes.value.push(ingrediente);
}
function removerIngrediente(ingrediente: string) {
  var index = ingredientes.value.indexOf(ingrediente);
  if (index > -1) {
    ingredientes.value.splice(index, 1);
  }
}
function buscarReceita() {
  if (ingredientes.value.length > 0) {
    conteudo.value = 'MostrarConteudo';
  } else {
    alert('Selecione um ou mais ingredientes.');
    conteudo.value = 'MostrarConteudo';
  }
}

function editarLista() {
  conteudo.value = 'SelecionarIngredientes';
  ingredientes.value = []
}
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />
    <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'" @adicionar-ingrediente="adicionarIngrediente"
      @remover-ingrediente="removerIngrediente" @buscar-receitas="buscarReceita" />
    <MostrarReceitas v-else-if="conteudo === 'MostrarConteudo'" @editar-lista="editarLista" :filtro="ingredientes" />
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>