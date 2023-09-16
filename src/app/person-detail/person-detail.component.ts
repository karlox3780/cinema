import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/services/movies.service';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent {
  id: any;
  errorMessage = "";
  personDetails: any;

  constructor(private navigation: NavigationService,
    public moviesService: MoviesService,
    private route: ActivatedRoute) { }

  public onBack(): void {
    this.navigation.back();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.moviesService.getPersonDetails(this.id).subscribe({
      next: data => {
        this.personDetails = data;
        console.log(this.personDetails)
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }
}