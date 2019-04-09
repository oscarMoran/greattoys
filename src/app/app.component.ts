import { Component } from '@angular/core';
import { ToyService } from './Services/toy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreatToysM';

  constructor(public toysService :ToyService){}
}
