import { Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/cast';

@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.scss'
})
export class CastCardComponent {
  @Input() actor: Cast;
}
