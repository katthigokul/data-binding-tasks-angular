import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent1Component } from '../scenario7/parent1/parent1.component';
import { Chid3Component } from '../scenario7/parent1/chid3/chid3.component';
import { Chid4Component } from '../scenario7/parent1/chid4/chid4.component';

@NgModule({
  declarations: [Parent1Component,Chid3Component,Chid4Component],
  imports: [
    CommonModule
  ],
  exports:[Parent1Component,Chid3Component,Chid4Component]
})
export class Scenario7Module { }
