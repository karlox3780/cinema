import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesListComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: 'search', component: SearchComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }