import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {SubjectService} from "./subject.service";


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  value$:Observable<number>;

  constructor( private _service:SubjectService) { }

  ngOnInit() {
    this.value$ = this._service.getTime();
  }

}
