import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  URL_SALAS = 'https://json-server-pweb.paulosilva3.repl.co/salas';

  constructor(private httpClient: HttpClient) { }

  pegarTodas(): Observable<Sala[]> {
    return this.httpClient.get<Sala[]>(this.URL_SALAS);
  }

  pegarPorId(id: number): Observable<Sala> {
    return this.httpClient.get<Sala>(`${this.URL_SALAS}/${id}`);
  }

  pegarporSala(tipo_sala: string): Observable<Sala> {
    return this.httpClient.get<Sala>(`${this.URL_SALAS}?sala=/${tipo_sala}`);
  }
  pegarPorData(data_agendada: Date): Observable<Sala> {
    return this.httpClient.get<Sala>(`${this.URL_SALAS}?data=/${data_agendada}`);
  }
  pegarPorHorarioInicial(horario_inicial: string): Observable<Sala> {
    return this.httpClient.get<Sala>(`${this.URL_SALAS}?horario=/${horario_inicial}`);
  }
  pegarPorHorarioFinal(horario_final: string): Observable<Sala> {
    return this.httpClient.get<Sala>(`${this.URL_SALAS}?horario=/${horario_final}`);
  }
  inserir(sala: Sala): Observable<Sala> {
    return this.httpClient.post<Sala>(this.URL_SALAS, sala);
  }

  atualizar(sala: Sala): Observable<Sala> {
    return this.httpClient.put<Sala>(`${this.URL_SALAS}/${sala.id}`, sala);
  }

  apagar(id: number): Observable<Sala> {
    return this.httpClient.delete<Sala>(`${this.URL_SALAS}/${id}`);
  }
}



