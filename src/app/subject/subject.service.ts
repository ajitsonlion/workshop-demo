import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class SubjectService {

  counter: number = 0;
  timer$: Subject<number> = new Subject<number>();


  constructor() {
    setInterval(() => {

      this.timer$.next(++this.counter);
    },1000);
  }


  getTime(): Observable<any> {
    return  this.timer$.asObservable() ;
  }
}
