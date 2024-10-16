<template>
    <h4 class="title is-4">Lista</h4>
    <div class="columns">
        <div class="column is-full">
            <router-link to="/projetos/novo" class="button">
                <span class="icon is-small">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </span>
            </router-link>
        </div>
    </div>
    <div class="columns">
        <div class="column is-full">
            <ListaProjetos :projetos="listaProjetos" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ListaProjetos from "@/components/ListaProjetos.vue";
import type IProjeto from "@/interfaces/IProjeto";
import { ref } from "vue";
import { projetoStore } from "@/store/ProjetoStore";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

library.add(faPlus);
const store = projetoStore();

const listaProjetos = ref<IProjeto[]>(store.getStore);

</script>
<style scoped></style>