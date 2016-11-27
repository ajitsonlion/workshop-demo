import {Component, OnInit, Input, DoCheck, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(' changed',changes );
  }

  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
