import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero.model';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from "./hero-detail/hero-detail/hero-detail.component";
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;    
  }
}
