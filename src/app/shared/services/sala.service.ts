import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Sala } from '../models/sala';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SalaService {
  NOME_COLECAO = 'salas';
  colecaoSalas: AngularFirestoreCollection<Sala>;

  constructor(private afs: AngularFirestore) {
    this.colecaoSalas = afs.collection(this.NOME_COLECAO);
  }

  pegarTodas(): Observable<Sala[]> {
    return this.colecaoSalas.valueChanges({ idField: 'id' });
  }

  pegarPorId(id: string): Observable<Sala> {
    const documentoRef = this.colecaoSalas.doc(id);
    return documentoRef.get().pipe(
      map((documento: any) => {
        const salaData = documento.data();
        if (!salaData) throw new Error('Dados da sala não encontrados');

        return new Sala(
          salaData['tipo_sala'],
          salaData['ocupada'],
          salaData['nome'],
          documento.id
        );
      })
    );
  }
}
