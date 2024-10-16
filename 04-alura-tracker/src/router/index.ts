import Tarefas from "@/views/Tarefas.vue";
import Projetos from "@/views/Projetos/Projetos.vue";
import NotFound from "@/views/NotFound.vue";
import { projetosRotas } from "@/views/Projetos/Rotas";
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas,
    },
    {
        path: '/projetos',
        component: Projetos,
        children: projetosRotas
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound        
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;