import { Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import { Sala } from 'src/app/shared/models/sala';
import { SalaService } from 'src/app/shared/services/sala.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
  
})
export class HorarioComponent {
[x: string]: any;
salas?: Array<Sala>;


constructor(private salaService: SalaService, private router: Router) {}
  ngOnInit(): void {
    this.salaService.pegarTodas().subscribe((salasRetornadas) => {
      this.salas = salasRetornadas;
    });
  }
  irEditar(id: number): void {
    this.router.navigate(['/salas', id]);
  }
}

