import { Injectable } from '@angular/core';
import { MensagemAbstract } from '../models/mensagem.abstract';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MensagemSweetService implements MensagemAbstract {
  deletar(mensagem: string, callback: () => void): void {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter essa ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Sim, deletar!',
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire('Deletado!', mensagem, 'success');
      }
    });
  }

  sucesso(mensagem: string, callback: () => void): void {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mensagem,
      showConfirmButton: true,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  }

  alerta(mensagem: string, callback: () => void): void {
    Swal.fire({
      title: 'Você deseja salvar as alterações?',
      showDenyButton: true,
      icon: 'warning',
      confirmButtonText: 'Salvar',
      denyButtonText: `Não salvar`,
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire(mensagem, '', 'success');
      } else if (result.isDenied) {
        Swal.fire('As alterações foram descartadas!', '', 'info');
      }
    });
  }
}
