import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  BASE_URL = 'http://localhost:8080/api/auth';

  constructor(private httpClient: HttpClient) {}

  cadastrar(cadastro: Cadastro): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.BASE_URL + '/registrar', cadastro);
  }
}
