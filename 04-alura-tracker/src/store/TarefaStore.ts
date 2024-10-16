import type ITarefa from "@/interfaces/ITarefa";
import { defineStore } from "pinia";

function UpdateStorage(data: any): void {
    localStorage.setItem('Tarefas', JSON.stringify(data));
}

export const tarefaStore = defineStore('tarefaStore', {
    state: () => {

        var localStorageTarefas = localStorage.getItem('Tarefas') || '[]';

        const tarefas: ITarefa[] = JSON.parse(localStorageTarefas);

        return { tarefas }
    },
    getters: {
        getStore: (state) => state.tarefas
    },
    actions: {
        add (tarefa: ITarefa) {
           this.tarefas.push(tarefa);
           UpdateStorage(this.tarefas);
        },
        remove (id: string) {
            let index = this.tarefas.findIndex(x => x.id == id);
            this.tarefas.splice(index, 1);
            UpdateStorage(this.tarefas);
        },
        edit (tarefa: ITarefa) {
            let index = this.tarefas.findIndex(x => x.id == tarefa.id);
            if (index > -1) {
                this.tarefas[index].descricao = tarefa.descricao;

                UpdateStorage(this.tarefas);
            } 
        }
    }
});

