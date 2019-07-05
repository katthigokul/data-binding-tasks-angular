import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario5Component } from '../scenario5/scenario5.component';
import { ParentComponent } from '../scenario5/parent/parent.component';
import { Child2Component } from '../scenario5/child2/child2.component';

@NgModule({
  declarations: [Scenario5Component,ParentComponent,Child2Component],
  imports: [
    CommonModule
  ],
  exports:[Scenario5Component,ParentComponent,Child2Component]
})
export class Scenario5Module { }
