import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  searchMovieInput?: Movie[]

  constructor() { }
  async findMovie(text: string) {
    const api = environment.base_ulr + environment.api_id
    const query = `&query=${text}`
    try {
      const res = await axios.get(api + query)
      this.searchMovieInput = res.data.results     
      console.log(this.searchMovieInput);
       
    } catch (error) {
      console.log(error);
    }
  }
}
