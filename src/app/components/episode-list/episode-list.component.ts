import { Component, Input } from '@angular/core';
import { Episode } from '../../interfaces/episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss'
})
export class EpisodeListComponent {
  @Input() episodesList: Episode[];
}
