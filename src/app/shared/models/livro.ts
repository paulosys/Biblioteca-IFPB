export class Livro {

    constructor(
        public id: number,
        public titulo: string,
        public autor: string,
        public editora: string,
        public ano_publicacao: string,
        public genero: Array<string>[],
        public sinopse: string,
        public numero_paginas: string,
        public disponibilidade: string,
        public idioma: string,
        public url_img: string,
        public exemplares: Array<Exemplares>,
        public isbn?: string,
    ) { }

}

class Exemplares {
    constructor(
        public numero_copias: number,
        public localizacao: string,
        public estado_conservacao: string,
    ){}
}