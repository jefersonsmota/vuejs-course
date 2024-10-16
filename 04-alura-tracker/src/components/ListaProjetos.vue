<script lang="ts" setup>
import type IProjeto from '@/interfaces/IProjeto';
import { ref, defineProps, type PropType } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEdit, faSave, faTrash);
const props = defineProps({
    projetos: { type: Array<IProjeto>, default: [] }
});

</script>
<template>
    <div class="box paragrafo" v-show="props.projetos?.length <= 0">
        <span>Lista vazia</span>
    </div>
    <table class="table is-fullwidth is-hoverable" v-show="props.projetos?.length > 0">
        <thead>
            <th>Id</th>
            <th>Nome</th>
            <th>#</th>
        </thead>
        <tbody>
            <tr v-for="(projeto, index) in props.projetos" :key="projeto.id">
                <td>{{ projeto.id }}</td>
                <td>{{ projeto.nome }}</td>
                <td>
                    <router-link :to="`/projetos/editar/${projeto.id}`" class="button">
                        <font-awesome-icon icon="fa-solid fa-edit" />
                    </router-link>
                </td>
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