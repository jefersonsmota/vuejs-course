import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function obterCategorias (): Promise<ICategoria[]> {

    const resp = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');

    return await resp.json();
}

export async function obterReceitas(): Promise<IReceita[]> {

    const resp = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');

    return await resp.json();
}