import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario2Component } from '../scenario2/scenario2.component';


@NgModule({
  declarations: [Scenario2Component],
  imports: [
    CommonModule
  ],
    exports:[Scenario2Component]
})
export class Scenario2Module { }
