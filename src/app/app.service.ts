import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService  {

  counter:number=0;


  getTime(): Observable<any> {
    return Observable.interval(1000).map(()=>this.counter++);
  }
}
