import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  public user;
  constructor() { }

  ngOnInit() {
  }

  userFound($event) {
    this.user = $event;
  }

}
