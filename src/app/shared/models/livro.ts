export class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public editora: string,
    public data_publicacao: Date,
    public genero: string,
    public sinopse: string,
    public numero_paginas: string,
    public disponibilidade: string,
    public idioma: string,
    public url_img: string,
    public quantidade_exemplares: number,
    public isbn?: string,
    public id?: string
  ) {}
}
