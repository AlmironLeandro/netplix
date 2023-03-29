import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetplixSearchComponent } from './Pages/netplix-search/netplix-search.component';
import { NetplixShowMovieComponent } from './Pages/netplix-show-movie/netplix-show-movie.component';

const routes: Routes = [


  {
    path: 'home',
    component: NetplixSearchComponent,
    pathMatch: 'full'
  },

  {
    path: 'movie/:id',
    component: NetplixShowMovieComponent
  },

  {
    path: '**',
    redirectTo: 'home',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
