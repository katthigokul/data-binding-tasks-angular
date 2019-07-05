import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from '../scenario6/component1/component1.component';
import { Component2Component } from '../scenario6/component2/component2.component';
import { Component3Component } from '../scenario6/component3/component3.component';

@NgModule({
  declarations: [Component1Component,Component2Component,Component3Component],
  imports: [
    CommonModule
  ],
exports:[Component1Component,Component2Component,Component3Component]
})
export class Scenario6Module { }
