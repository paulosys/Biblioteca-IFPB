import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DiaSemana } from 'src/app/shared/enums/dia_semana';
import { Dia } from 'src/app/shared/models/dia';
import { HorariosDisponiveis } from 'src/app/shared/models/horarios_disponiveis';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {
  idSala?: number;
  diasSemana: Array<Dia> = [];
  horarios: Array<HorariosDisponiveis> = [];

  get horarioss(): Array<HorariosDisponiveis> {
    return [
      new HorariosDisponiveis(0, '08:00', '09:00', false),
      new HorariosDisponiveis(1, '09:00', '10:00', false),
      new HorariosDisponiveis(2, '10:00', '11:00', false),
      new HorariosDisponiveis(3, '11:00', '12:00', false),
      new HorariosDisponiveis(4, '12:00', '13:00', false),
      new HorariosDisponiveis(5, '13:00', '14:00', false),
      new HorariosDisponiveis(6, '14:00', '15:00', false),
      new HorariosDisponiveis(7, '15:00', '16:00', false),
      new HorariosDisponiveis(8, '16:00', '17:00', false),
      new HorariosDisponiveis(9, '17:00', '18:00', false),
      new HorariosDisponiveis(10, '18:00', '19:00', false),
      new HorariosDisponiveis(11, '19:00', '20:00', false),
      new HorariosDisponiveis(12, '20:00', '21:00', false),
      new HorariosDisponiveis(13, '21:00', '22:00', false),
    ];
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idSala = params['idSala'];
    });

    this.diasSemana = this._getOrdemDiaSemana();
    
    this.horarios = [
      new HorariosDisponiveis(0, '08:00', '09:00', false),
      new HorariosDisponiveis(1, '09:00', '10:00', false),
      new HorariosDisponiveis(2, '10:00', '11:00', false),
      new HorariosDisponiveis(3, '11:00', '12:00', false),
      new HorariosDisponiveis(4, '12:00', '13:00', false),
      new HorariosDisponiveis(5, '13:00', '14:00', false),
      new HorariosDisponiveis(6, '14:00', '15:00', false),
      new HorariosDisponiveis(7, '15:00', '16:00', false),
      new HorariosDisponiveis(8, '16:00', '17:00', false),
      new HorariosDisponiveis(9, '17:00', '18:00', false),
      new HorariosDisponiveis(10, '18:00', '19:00', false),
      new HorariosDisponiveis(11, '19:00', '20:00', false),
      new HorariosDisponiveis(12, '20:00', '21:00', false),
      new HorariosDisponiveis(13, '21:00', '22:00', false),
    ];
  }

  _getOrdemDiaSemana(): Array<Dia> {
    const dias: Array<Dia> = [
      new Dia(0, 'Domingo'),
      new Dia(1, 'Segunda'),
      new Dia(2, 'Terça'),
      new Dia(3, 'Quarta'),
      new Dia(4, 'Quinta'),
      new Dia(5, 'Sexta'),
      new Dia(6, 'Sabado'),
    ];

    let diaSemana = new Date().getDay();

    const ordemDiaSemana = [dias[diaSemana]];

    if (diaSemana === DiaSemana.Domingo || diaSemana === DiaSemana.Sabado) {
      return [
        new Dia(1, 'Segunda'),
        new Dia(2, 'Terça'),
        new Dia(3, 'Quarta'),
        new Dia(4, 'Quinta'),
        new Dia(5, 'Sexta'),
      ];
    }

    for (let dia = DiaSemana.Segunda; dia < DiaSemana.Sexta; dia++) {
      diaSemana === DiaSemana.Sexta
        ? (diaSemana = DiaSemana.Segunda)
        : diaSemana++;

      ordemDiaSemana.push(dias[diaSemana]);
    }

    return ordemDiaSemana;
  }

  selecionarHorario( horario: HorariosDisponiveis) {
    
  }

  irEditar(idDia: number): void {
    this.router.navigate([`/user/salas/${this.idSala!}/horarios/${idDia}`]);
  }
}
