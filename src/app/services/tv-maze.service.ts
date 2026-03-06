import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../interfaces/serie';
import { Episode } from '../interfaces/episode';
import { Cast } from '../interfaces/cast';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {

  private serieUrl: string = 'https://api.tvmaze.com/shows/35184';
  private episodesUrl: string = 'https://api.tvmaze.com/shows/35184/episodes';
  private castUrl: string = 'https://api.tvmaze.com/shows/35184/cast';

  constructor(private http: HttpClient) {}

  getSerie() {
    return this.http.get<Serie>(this.serieUrl);
  }

  getEpisodes() {
    return this.http.get<Episode[]>(this.episodesUrl);
  }

  getCast() {
    return this.http.get<Cast[]>(this.castUrl);
  }

}
