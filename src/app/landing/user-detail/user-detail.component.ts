import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input() user;
  constructor() { }

  ngOnInit() {
    console.log(this.user, 'en el input');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
