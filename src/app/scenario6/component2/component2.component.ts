import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
	@Output() public compo2name=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fun2(value)
  {
  	this.compo2name.emit(value);
  }

}
