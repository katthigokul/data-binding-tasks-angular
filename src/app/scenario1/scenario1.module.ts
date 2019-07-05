import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario1Component } from '../scenario1/scenario1.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [Scenario1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Scenario1Component]
  
})
export class Scenario1Module { }
