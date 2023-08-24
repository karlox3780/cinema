import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from '../../services/movies.service';
import { Carousel, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  errorMessage = "";
  moviesNowPalying: any;
  popularMovies: any;

  constructor(public moviesService: MoviesService, private modalService: NgbModal) { }

  ngOnInit() {

    initTE({ Carousel, Dropdown });

    this.moviesService.getMoviesNowPlaying().subscribe({
      next: data => {
        this.moviesNowPalying = data.results;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

    this.moviesService.getPopularMovies().subscribe({
      next: data => {
        this.popularMovies = data.results;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }
}
