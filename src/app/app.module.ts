import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/service.service';
import  {Scenario1Module} from '../app/scenario1/scenario1.module';
import  {Scenario2Module} from '../app/scenario2/scenario2.module';
import  {Scenario3Module} from '../app/scenario3/scenario3.module';
import  {Scenario4Module} from '../app/scenario4/scenario4.module';
import {Scenario5Module} from '../app/scenario5/scenario5.module';
import {Scenario6Module} from '../app/scenario6/scenario6.module';
import {Scenario7Module} from '../app/scenario7/scenario7.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Scenario1Module,
    Scenario2Module,
    Scenario3Module,
    Scenario4Module,
    Scenario5Module,
    Scenario6Module,
    Scenario7Module,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
