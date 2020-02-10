import { Component, OnInit } from '@angular/core';
import {UserActiveService} from '../userActive.service';
@Component({
  selector: 'app-custom-nav',
  templateUrl: './custom-nav.component.html',
  styleUrls: ['./custom-nav.component.css']
})
export class CustomNavComponent implements OnInit {

  constructor(private uaService: UserActiveService) { }

  ngOnInit() {
  }

  updateActivationState(){
    this.uaService.changeActiveState();
  }
}
