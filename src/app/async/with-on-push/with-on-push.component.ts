import { Component, OnInit } from '@angular/core';
import {WithOnPushService} from "./with-on-push.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-with-on-push',
  templateUrl: 'with-on-push.component.html',
  styleUrls: ['with-on-push.component.scss']
})
export class WithOnPushComponent implements OnInit {

  users$:Observable<any>;
  binding:string='change me';
  constructor(private withOnPush:WithOnPushService) { }

  ngOnInit() {
    this.users$=this.withOnPush.getUsers();
  }
  addToList(){
    let newUser={ "name": "Jaydon Rolfson", "username": "Murray69", "email": "Savanna51@yahoo.com", "address": { "street": "Ricardo Shore", "suite": "Apt. 970", "city": "North Rahul", "zipcode": "08087", "geo": { "lat": "-6.8937", "lng": "-127.1959" } }, "phone": "1-711-147-0584", "website": "jabari.com", "company": { "name": "Zulauf LLC", "catchPhrase": "Enhanced national conglomeration", "bs": "extensible productize networks" } }


    newUser.name=this.binding;

  }
}
