import { Component } from '@angular/core';
import { CardComponent } from '../../UI/card/card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}
