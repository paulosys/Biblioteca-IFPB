import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})

export class LivroService {
  URL_LIVROS = 'http://localhost:3000/livros';

  constructor(private httpClient: HttpClient) { }

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
    return this.httpClient.put<Livro>(`${this.URL_LIVROS}/${livro.id}`, livro);
  }

  apagar(id: number): Observable<Livro> {
    return this.httpClient.delete<Livro>(`${this.URL_LIVROS}/${id}`);
  }
}
