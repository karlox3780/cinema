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
  pageAux = 0;

  constructor(public moviesService: MoviesService) {
    this.moviesSearch = [];
  }

  public searchMovie(movie: string, page: number, type: string) {
    if (type === "showmore")
      this.pageAux = this.pageAux + page;
    else {
      this.pageAux = 1
      this.moviesSearch = []
    }

    this.moviesService.getMovieSearch(movie, this.pageAux).subscribe({
      next: data => {
        this.moviesSearch.length === 0 ? this.moviesSearch = data.results : this.moviesSearch.push(...data.results)
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }

}