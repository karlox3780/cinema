import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    errorMessage = "";
    movies: any;
    apikey: string;

    constructor(private http: HttpClient) {
        this.apikey = process.env["API_KEY"] || "pepe";
    }

    getMoviesNowPlaying() {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apikey}`)
    }
    getPopularMovies() {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apikey}`)
    }
    getCreditsMovie(movie_id: number) {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/` + movie_id + `/credits?api_key=${this.apikey}`)
    }
    getMovieDetails(movie_id: number) {
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/` + movie_id + `?api_key=${this.apikey}`)
    }
}