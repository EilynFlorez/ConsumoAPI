import { Component, OnDestroy, OnInit } from '@angular/core';
import { Serie } from './interfaces/serie';
import { Episode } from './interfaces/episode';
import { Cast } from './interfaces/cast';
import { map, Subscription } from 'rxjs';
import { TvMazeService } from './services/tv-maze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  serie: Serie;
  episodesSerie: Episode[] = [];
  castSerie: Cast[] = [];

  private subscriptionSerie: Subscription;
  private subscriptionEpisode: Subscription;
  private subscriptionCast: Subscription;

  constructor(private tvMazeServices: TvMazeService) { }

  ngOnInit(): void {

    // Subscripcion de la serie
    this.subscriptionSerie = this.tvMazeServices
      .getSerie()
      .pipe(
        map((serie) => ({
          id: serie.id,
          url: serie.url,
          name: serie.name,
          language: serie.language,
          premiered: serie.premiered,
          officialSite: serie.officialSite,
          summary: serie.summary,
          image: serie.image,
        }))
      )
      .subscribe({
        next: (data) => {
          this.serie = data;
          console.log("Serie cargada");
        },
        error: (error) => {
          console.log(error);
        }
      });

    // Subscripción de Episodios
    this.subscriptionEpisode = this.tvMazeServices
      .getEpisodes()
      .pipe(
        map((episodesSerie) => {
          return episodesSerie.map((episode) => {
            return {
              id: episode.id,
              name: episode.name,
              season: episode.season,
              number: episode.number,
            };
          });
        }),
      )
      .subscribe({
        next: (data) => {
          this.episodesSerie = data;
          console.log("Episodios cargados");
        },
        error: (error) => {
          console.log(error);
        }
      });

    // Subscripción del Cast
    this.subscriptionCast = this.tvMazeServices
      .getCast()
      .pipe(
        map((castSerie) => {
          return castSerie.map((actor) => {
            return {
              person: {
                id: actor.person.id,
                name: actor.person.name,
                image: actor.person.image,
              },
              character: {
                name: actor.character.name,
              }
            };
          });
        }),
      )
      .subscribe({
        next: (data) => {
          this.castSerie = data;
          console.log("Elenco cargados");
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptionSerie.unsubscribe();
    this.subscriptionEpisode.unsubscribe();
    this.subscriptionCast.unsubscribe();
  }


}
