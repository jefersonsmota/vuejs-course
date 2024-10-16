import type INotificacao from "@/interfaces/INotificacao";
import { defineStore } from "pinia";

function UpdateStorage(data: INotificacao): void {
    let json = sessionStorage.getItem('Notificacoes') || '[]';
    let storage: INotificacao[] = JSON.parse(json);
    storage.push(data);
    sessionStorage.setItem('Notificacoes', JSON.stringify(storage));
}

export const notificacoesStore = defineStore('notificacoesStore', {
    state: () => {
        const notificacoes: INotificacao[] = [];

        return { notificacoes }
    },
    getters: {
        getStore: (state) => state.notificacoes
    },
    actions: {
        add(notificacao: INotificacao) {
            notificacao.id = crypto.randomUUID();
            this.notificacoes.push(notificacao);
            UpdateStorage(notificacao);

            setTimeout(() => {
                let index = this.notificacoes.findIndex(x => x.id == notificacao.id);
                this.notificacoes.splice(index, 1);
            }, 3000);
        }
    }
});
