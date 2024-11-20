import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from "./heroes/heroes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroesComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello word!';
}
