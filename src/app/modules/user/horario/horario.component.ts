import { Component, OnInit } from '@angular/core';

import { Sala } from 'src/app/shared/models/sala';
import { SalaService } from 'src/app/shared/services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaSemana } from 'src/app/shared/enums/dia_semana';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {
  salas?: Array<Sala>;
  diasSemana: Array<String> = [];
  salaId?: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.diasSemana = this._getOrdemDiaSemana();

    this.route.params.subscribe((params) => {
      this.salaId = params['id'];
    });
  }

  _getOrdemDiaSemana(): Array<String> {
    const dias = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];

    let diaSemana = new Date().getDay();

    const ordemDiaSemana = [dias[diaSemana]];

    if (diaSemana === DiaSemana.Domingo || diaSemana === DiaSemana.Sabado) {
      return ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
    }

    for (let dia = DiaSemana.Segunda; dia < DiaSemana.Sexta; dia++) {
      diaSemana === DiaSemana.Sexta
        ? (diaSemana = DiaSemana.Segunda)
        : diaSemana++;

      ordemDiaSemana.push(dias[diaSemana]);
    }

    return ordemDiaSemana;
  }

  irEditar(id: number): void {
    this.router.navigate(['/user/salas/horarios/adicionar', id]);
  }
}
