import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
     {
         path:'', component:HomeComponent
     },
    {
        path:'movies', component:MoviesComponent
    },
     {
         path:'login', component:LoginComponent
     },
    //  {
    //     path:'**', component:ErrorComponent
    //  },
    {
        path:'movie/:id',component: MovieComponent
    },
];
