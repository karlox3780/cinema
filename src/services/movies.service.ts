import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    errorMessage = "";
    movies: any;
    apikey: string;

    constructor(private http: HttpClient) {
        this.apikey = environment.moviesApiKey;
    }

    getMoviesNowPlaying() {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&api_key=${this.apikey}`)
    }
    getPopularMovies() {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?language=es-ES&api_key=${this.apikey}`)
    }
    getCreditsMovie(movie_id: number) {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=es-ES&api_key=${this.apikey}`)
    }
    getMovieDetails(movie_id: number) {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movie_id}?language=es-ES&api_key=${this.apikey}`)
    }
    getMovieSearch(movie_name: string, page: number) {
        return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?query=${movie_name}&include_adult=false&language=es-ES&page=` + page + `&api_key=${this.apikey}`)
    }
    getPersonDetails(person_id: string) {
        return this.http.get<any>(`https://api.themoviedb.org/3/person/${person_id}?language=en-US&api_key=${this.apikey}`)
    }
}