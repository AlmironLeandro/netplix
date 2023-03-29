import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, Movie, MovieFound } from 'src/app/interfaces/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-netplix-show-movie',
  templateUrl: './netplix-show-movie.component.html',
  styleUrls: ['./netplix-show-movie.component.scss']
})
export class NetplixShowMovieComponent implements OnInit {

  public movie!: MovieFound
  public backgroundMovie!: string
  public generes?: Genre[]
  public poster?: string

  constructor(public movieService: MovieServiceService, public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieMatched()

  }
  movieMatched = async () => {
    this.router.params.subscribe(async ({ id }) => {
      const imageHd = await this.movieService.getPoster(id),
        [image] = imageHd.backdrops
      const res = await this.movieService.getMovieById(id)
      this.generes = res.genres
      this.movie = res
      this.backgroundMovie = image.file_path
      console.log(this.backgroundMovie)
      this.poster = environment.posterUrl + res.poster_path



    })

  }

}
