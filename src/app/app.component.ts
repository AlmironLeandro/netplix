import { Component, ElementRef, ViewChild } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Netplix';


  constructor() { }

  @ViewChild('search') search!: ElementRef
  busquedaActual: any[] = []
  api_id: string = '7a2c39b12aa526a3c19ace7f3b5b6029'


  async buscar() {
    const datos = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_id}&language=en-US&page=1&include_adult=false&query=${this.search.nativeElement.value}`
    console.log(this.search.nativeElement.value);

    try {
      const res = await axios.get(datos)
      this.busquedaActual = res.data.results
      console.log(this.busquedaActual);

    } catch (error) {
      console.log(error);

    }
  }


}



