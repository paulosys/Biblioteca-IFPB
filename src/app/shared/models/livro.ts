export class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public editora: string,
    public data_publicacao: Date,
    public genero: string,
    public sinopse: string,
    public qntd_paginas: string,
    public disponibilidade: boolean,
    public idioma: string,
    public url_img: string,
    public qntd_exemplares: number,
    public isbn?: string,
    public id?: number
  ) {}
}
