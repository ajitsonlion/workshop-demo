import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class WithOnPushService  {
  users$:BehaviorSubject<any>=new BehaviorSubject<any>([]);
  constructor(private http:Http){
    this.http.get('http://localhost:3001/users').map((res)=>res.json()).delay(5000).subscribe((data)=>{
      this.users$.next(data);
    });
  }


  getUsers(): Observable<any> {
    return  this.users$.asObservable();
  }
}
