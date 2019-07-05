import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service.service';


@Component({
  selector: 'app-chid4',
  templateUrl: './chid4.component.html',
  styleUrls: ['./chid4.component.css']
})
export class Chid4Component implements OnInit {
  message:string;

  constructor(private ref1:ServiceService) { }

  ngOnInit() {
  this.ref1.currentMessage.subscribe(message => this.message=message);
  }


}
