import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-card',
  templateUrl: './sala-card.component.html',
  styleUrls: ['./sala-card.component.scss'],
})
export class SalaCardComponent {
  @Input() id?: string;
  @Input() icone?: string;
  @Input() nome?: string;
  @Input() ocupada?: boolean;

  constructor(private router: Router) {}

  irHorarios(id: string) {
    this.router.navigate(['/salas/horarios', id]);
  }
}
