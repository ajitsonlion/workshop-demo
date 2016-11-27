import { Component, OnInit } from '@angular/core';
import {BehaviorSubjectService} from "./behaviorSubject.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html',
  styleUrls: ['./behaviour.component.scss']
})
export class BehaviourComponent implements OnInit {


  value$:Observable<number>;
  constructor( private _behaviour:BehaviorSubjectService) { }

  ngOnInit() {
    this.value$ = this._behaviour.getTime();
  }

}
