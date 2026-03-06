import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { CastCardComponent } from './components/cast-card/cast-card.component';
import { CastListComponent } from './components/cast-list/cast-list.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    CastCardComponent,
    CastListComponent,
    EpisodeCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
