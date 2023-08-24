import { Component } from '@angular/core';
import { Imovie } from './shared/models/movie';
import {movie} from './shared/const/movies'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movieModel';
  public movieArray : Array<Imovie> = movie;
  public searchByMovie !: string;
}
