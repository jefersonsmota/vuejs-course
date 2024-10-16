import type IProjeto from "@/interfaces/IProjeto";
import { defineStore } from "pinia";

function UpdateStorage(data: any): void {
    localStorage.setItem('Projetos', JSON.stringify(data));
}

export const projetoStore = defineStore('projetoStore', {
    state: () => {

        var localStorageProjetos = localStorage.getItem('Projetos') || '[]';

        const projetos: IProjeto[] = JSON.parse(localStorageProjetos);

        return { projetos }
    },
    getters: {
        getStore: (state) => state.projetos
    },
    actions: {
        add (projeto: IProjeto) {
           this.projetos.push(projeto);
           UpdateStorage(this.projetos);
        },
        remove (id: string) {
            let index = this.projetos.findIndex(x => x.id == id);
            this.projetos.splice(index, 1);
            UpdateStorage(this.projetos);
        },
        edit (projeto: IProjeto) {
            let index = this.projetos.findIndex(x => x.id == projeto.id);
            if (index > -1) {
                this.projetos[index].nome = projeto.nome;

                UpdateStorage(this.projetos);
            } 
        }
    }
});

