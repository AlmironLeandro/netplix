import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetplixSearchComponent } from './Pages/netplix-search/netplix-search.component';
import { NetplixShowMovieComponent } from './Pages/netplix-show-movie/netplix-show-movie.component';
import { NetplixNavbarComponent } from './components/netplix-navbar/netplix-navbar.component';
import { NetplixSearchMovieComponent } from './components/netplix-search-movie/netplix-search-movie.component';
import { NetplixMovieComponent } from './components/netplix-movie/netplix-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NetplixSearchComponent,
    NetplixShowMovieComponent,
    NetplixNavbarComponent,
    NetplixSearchMovieComponent,
    NetplixMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
