import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/services/movies.service';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  id: any;
  errorMessage = "";
  creditsMovie: any;
  movieDetails: any;

  constructor(private navigation: NavigationService,
    private modalService: NgbModal,
    public moviesService: MoviesService,
    private route: ActivatedRoute) { }

  public onBack(): void {
    this.navigation.back();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.moviesService.getMovieDetails(this.id).subscribe({
      next: data => {
        this.movieDetails = data;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

    this.moviesService.getCreditsMovie(this.id).subscribe({
      next: data => {
        this.creditsMovie = data.cast;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

  }
}
