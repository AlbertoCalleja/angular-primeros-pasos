import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'bert';
    public age: number = 29;

    get capitalizeName(): string { //Definir un getter
      return this.name.toUpperCase();
    }

    getHeroDescription(): string {
      return `${this.name} - ${this.age}`;
    }

    changeHero(): void {
      this.name = 'Selene';
    }

    changeAge(): void {
      this.age = 26;
    }

    resetForm(): void {
      this.name = 'bert';
      this.age = 29;
    }
}
