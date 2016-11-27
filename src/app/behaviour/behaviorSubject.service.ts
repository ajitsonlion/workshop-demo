import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";
import { BehaviorSubject} from "rxjs/BehaviorSubject"

@Injectable()
export class BehaviorSubjectService  {

  counter:number=0;
   timer$:BehaviorSubject<number>=new BehaviorSubject<number>(0);
   constructor(){
     setInterval(()=>{
       this.timer$.next(++this.counter);
     },1000);
   }


   getTime(): Observable<any> {
    return  this.timer$.asObservable() ;
  }
}
