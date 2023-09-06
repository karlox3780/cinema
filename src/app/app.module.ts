import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MoviesService } from 'src/services/movies.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ImageWithLoadingComponent } from './layout/image-with-loading/image-with-loading.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesListComponent,
    NavbarComponent,
    ImageWithLoadingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
