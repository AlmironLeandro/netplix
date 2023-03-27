import { Component } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-netplix-search',
  templateUrl: './netplix-search.component.html',
  styleUrls: ['./netplix-search.component.scss']
})
export class NetplixSearchComponent {

  constructor(public movieService:MovieServiceService){}
}
