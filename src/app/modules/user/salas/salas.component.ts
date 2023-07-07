import { Component, OnInit } from '@angular/core';
import { TipoSala } from 'src/app/shared/enums/tipo_sala';
import { Sala } from 'src/app/shared/models/sala';
import { SalaService } from 'src/app/shared/services/sala.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss'],
})
export class SalasComponent implements OnInit {
  salasGrupo: Array<Sala> = [];
  salasIndividuais: Array<Sala> = [];

  constructor(private salaService: SalaService) {}

  ngOnInit(): void {
    this.salaService.pegarTodas().subscribe((salas) => {
      this.salasGrupo = salas.filter((sala) => sala.tipo_sala === TipoSala.Grupo);
      this.salasIndividuais = salas.filter((sala) => sala.tipo_sala === TipoSala.Individual);
    });
  }
}
