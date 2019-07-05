import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario3Component } from '../scenario3/scenario3.component';
import { ChildComponent } from '../scenario3/child/child.component';

@NgModule({
  declarations: [Scenario3Component,ChildComponent],
  imports: [
    CommonModule
  ],
  exports:[Scenario3Component,ChildComponent]
})
export class Scenario3Module { }
