<template>
    <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input v-model="filtro" @keyup.capture="filtrar" class="input" type="text" placeholder="Digite para filtrar">
            <span class="icon is-small is-left">
                <font-awesome-icon icon="fas fa-search" />
            </span>
        </p>
    </div>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import type { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, defineEmits } from "vue";

library.add(faSearch);
const emit = defineEmits(["FiltarBusca"]);

let filtro = ref("");

function filtrar() {
    if (filtro.value.trim() == '') return;
    
    emit('FiltarBusca', filtro.value);
}


</script>

<style scoped></style>