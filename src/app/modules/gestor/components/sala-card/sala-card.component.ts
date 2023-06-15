import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sala-card',
  templateUrl: './sala-card.component.html',
  styleUrls: ['./sala-card.component.scss'],
})
export class SalaCardComponent {
  @Input() icone?: string;
  @Input() label?: string;
  @Input() ocupada: boolean = false;
}
