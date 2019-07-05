import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario4Component } from '../scenario4/scenario4.component';
import { Child1Component } from '../scenario4/child1/child1.component';

@NgModule({
  declarations: [Scenario4Component,Child1Component],
  imports: [
    CommonModule
  ],
  exports:[Scenario4Component,Child1Component]
})
export class Scenario4Module { }
