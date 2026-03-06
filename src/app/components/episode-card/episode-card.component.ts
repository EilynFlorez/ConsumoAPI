import { Component, Input } from '@angular/core';
import { Episode } from '../../interfaces/episode';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss'
})
export class EpisodeCardComponent {
  @Input() episode: Episode;
}
