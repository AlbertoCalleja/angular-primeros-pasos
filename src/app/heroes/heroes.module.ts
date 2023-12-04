import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule //Hay que importar este módulo para los ngIf/ngFor/ngSwitch entre otras cosas
  ]
})
export class HeroesModule { }
