import { Component, ElementRef, ViewChild } from '@angular/core';
import axios from 'axios';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-netplix-search-movie',
  templateUrl: './netplix-search-movie.component.html',
  styleUrls: ['./netplix-search-movie.component.scss']
})
export class NetplixSearchMovieComponent {

  constructor(public serviceMovie: MovieServiceService) {

  }
  @ViewChild('search') search!: ElementRef
  searchMovieInput?: any[]

  async searchMovie() {
    this.serviceMovie.findMovie(this.search.nativeElement.value)
  }
}
