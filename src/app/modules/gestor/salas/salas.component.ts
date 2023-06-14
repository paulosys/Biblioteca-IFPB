import { Component } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss'],
})
export class SalasComponent {
  salasGrupo = [
    { id: 1, icone: 'group', ocupada: false, label: 'Sala em Grupo' }
  ];

  salasIndividuais = [
    { id: 1, icone: 'person', ocupada: true, label: 'Sala Individual' }    
  ];
}
