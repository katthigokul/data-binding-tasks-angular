import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
	@Output() public parentEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(value){
  	this.parentEvent.emit(value);
  }
}
