import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 import { TD_LOADING_ENTRY_COMPONENTS} from "@covalent/core";

import {ComponentOne} from "./component-one/component-one.component";
import {ComponentTwo} from "./component-two/component-two.component";
import {ComponentThree} from "./component-three/component-three.component";
import {ComponentFour} from "./component-four/component-four.component";
import {ComponentFive} from "./component-five/component-five.component";
import {ComponentSix} from "./component-six/component-six.component";
import {ComponentSeven} from "./component-seven/component-seven.component";
import {DefaultChangeDetectionComponent} from "./default-change-detection.component";


@NgModule({
  declarations: [
    DefaultChangeDetectionComponent, ComponentOne,ComponentTwo,ComponentThree,ComponentFour,ComponentFive,ComponentSix,ComponentSeven
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   ],
  providers: [
    //appRoutingProviders,
    Title,
   ], // additional providers needed for this module
  entryComponents: [ TD_LOADING_ENTRY_COMPONENTS ],
  exports: [DefaultChangeDetectionComponent]
})
export class DefaultChangeDetectionModule { }
