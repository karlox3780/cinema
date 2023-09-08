import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  errorMessage = "";
  moviesSearch: any;

  constructor(public moviesService: MoviesService) { }

  public searchMovie(movie: string) {
    this.moviesService.getMovieSearch(movie).subscribe({
      next: data => {
        this.moviesSearch = data.results;
        console.log(this.moviesSearch)
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }

}