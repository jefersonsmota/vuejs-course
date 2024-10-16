import Editar from "./Editar.vue";
import Novo from "./Novo.vue";
import Lista from "./Lista.vue";
import type { RouteRecordRaw } from "vue-router";

export const projetosRotas: RouteRecordRaw[] = [
    {
        path: '',
        name: 'Lista',
        component: Lista
    },
    {
        path: 'novo',
        name: 'Novo projeto',
        component: Novo
    },
    {
        path: 'editar/:id',
        name: 'Editar projeto',
        component: Editar,
        props: true
    }
];