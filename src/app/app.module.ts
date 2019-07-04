import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { ChildComponent } from './scenario3/child/child.component';
import { Child1Component } from './scenario4/child1/child1.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { ParentComponent } from './scenario5/parent/parent.component';
import { Child2Component } from './scenario5/child2/child2.component';
import { Component1Component } from './scenario6/component1/component1.component';
import { Component2Component } from './scenario6/component2/component2.component';
import { Component3Component } from './scenario6/component3/component3.component';


@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Scenario4Component,
    ChildComponent,
    Child1Component,
    Scenario5Component,
    ParentComponent,
    Child2Component,
    Component1Component,
    Component2Component,
    Component3Component  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
