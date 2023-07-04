import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  //URL_LIVROS = 'https://json-server-pweb.paulosilva3.repl.co/livros';
  URL_LIVROS = 'http://localhost:8080/livros';
  constructor(private httpClient: HttpClient) {}

  pegarTodos(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.URL_LIVROS);
  }

  pegarPorId(id: number): Observable<Livro> {
    return this.httpClient.get<Livro>(`${this.URL_LIVROS}/${id}`);
  }

  pegarPorTitulo(titulo: string): Observable<Livro> {
    return this.httpClient.get<Livro>(`${this.URL_LIVROS}?titulo=/${titulo}`);
  }

  inserir(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.URL_LIVROS, livro);
  }

  atualizar(livro: Livro): Observable<Livro> {
    console.log(livro);
    return this.httpClient.put<Livro>(`${this.URL_LIVROS}/${livro.id}`, livro);
  }

  apagar(id: number): Observable<Livro> {
    return this.httpClient.delete<Livro>(`${this.URL_LIVROS}/${id}`);
  }
}
