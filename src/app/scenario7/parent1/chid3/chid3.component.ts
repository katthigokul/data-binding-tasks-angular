import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service.service';

@Component({
  selector: 'app-chid3',
  templateUrl: './chid3.component.html',
  styleUrls: ['./chid3.component.css']
})
export class Chid3Component implements OnInit {
  message:string;

  constructor(private ref:ServiceService) { }

  ngOnInit() {
    this.ref.currentMessage.subscribe(message=> this.message=message);
  }
  log(value)
  {
    this.ref.changeMessage(value);
  }

}
