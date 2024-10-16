import type IProjeto from "./IProjeto";

export default interface ITarefa {
    id: string,
    descricao: string,
    tempo: string,
    projeto: IProjeto
}