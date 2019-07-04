import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3',
  templateUrl: './scenario3.component.html',
  styleUrls: ['./scenario3.component.css']
})
export class Scenario3Component implements OnInit {
public name=""
  constructor() { }

  ngOnInit() {
  }
  log(value){

console.log(value);
this.name=value;
}

}
