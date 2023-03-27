import { Component } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-netplix-movie',
  templateUrl: './netplix-movie.component.html',
  styleUrls: ['./netplix-movie.component.scss']
})
export class NetplixMovieComponent {

  constructor(public movies:MovieServiceService){}
}
