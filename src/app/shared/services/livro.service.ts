import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { Livro } from '../models/livro';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  NOME_COLECAO = 'livros';
  colecaoLivros: AngularFirestoreCollection<Livro>;

  constructor(private afs: AngularFirestore) {
    this.colecaoLivros = afs.collection(this.NOME_COLECAO);
  }

  pegarTodos(): Observable<Livro[]> {
    return this.colecaoLivros.valueChanges({ idField: 'id' });
  }

  pegarPorId(id: string): Observable<Livro> {
    const documentoRef = this.colecaoLivros.doc(id);
    return documentoRef.get().pipe(
      map((documento: any) => {
        const livroData = documento.data();
        if (!livroData) throw new Error('Dados do livro não encontrados');

        const data_publicacao: Date = new Date(
          livroData['data_publicacao'].seconds * 1000
        );

        return new Livro(
          livroData['titulo'],
          livroData['autor'],
          livroData['editora'],
          data_publicacao,
          livroData['genero'],
          livroData['sinopse'],
          livroData['numero_paginas'],
          livroData['disponibilidade'],
          livroData['idioma'],
          livroData['url_img'],
          livroData['quantidade_exemplares'],
          livroData['isbn'],
          documento.id
        );
      })
    );
  }

  // pegarPorTitulo(titulo: string): Observable<Livro> {
  //   return this.httpClient.get<Livro>(`${this.URL_LIVROS}?titulo=/${titulo}`);
  // }

  inserir(livro: Livro): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    delete livro.id;
    // Object.assign({}, livro) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoLivros.add(Object.assign({}, livro)));
  }

  atualizar(livro: Livro): Observable<void> {
    // removendo id pois não vamos guardar nos dados do documento,
    // mas sim usar apenas como id para recuperar o documento
    return from(
      this.colecaoLivros.doc(livro.id).update(Object.assign({}, livro))
    );
  }

  apagar(id: string): Observable<void> {
    return from(this.colecaoLivros.doc(id).delete());
  }
}
