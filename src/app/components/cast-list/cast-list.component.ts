import { Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/cast';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrl: './cast-list.component.scss'
})
export class CastListComponent {
  @Input() castList: Cast[];
}
