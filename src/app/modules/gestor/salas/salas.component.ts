import { Component } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss'],
})
export class SalasComponent {
  salasGrupo = [
    { id: 1, icone: 'group', ocupada: false, label: 'Sala em Grupo 1' },
    { id: 2, icone: 'group', ocupada: false, label: 'Sala em Grupo 2' }
  ];

  salasIndividuais = [
    { id: 1, icone: 'person', ocupada: true, label: 'Sala Individual 1' },
    { id: 2, icone: 'person', ocupada: false, label: 'Sala Individual 2' }, 
    { id: 3, icone: 'person', ocupada: false, label: 'Sala Individual 3' },   
    { id: 4, icone: 'person', ocupada: false, label: 'Sala Individual 4' },   
    { id: 5, icone: 'person', ocupada: true, label: 'Sala Individual 5' }      
  ];
}
