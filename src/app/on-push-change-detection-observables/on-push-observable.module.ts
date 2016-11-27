import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {TD_LOADING_ENTRY_COMPONENTS} from "@covalent/core";


import {ComponentFour} from "./component-four/component-four.component";
import {ComponentFive} from "./component-five/component-five.component";
import {ComponentSix} from "./component-six/component-six.component";
import {ComponentSeven} from "./component-seven/component-seven.component";
 import {ComponentTen} from "./component-ten/component-ten.component";
import {ComponentEleven} from "./component-eleven/component-eleven.component";
import {ComponentEight} from "./component-eight/component-eight.component";
import {ComponentNine} from "./component-nine/component-nine.component";
import {ComponentSeventeen} from "./component-seventeen/component-seventeen.component";
import {ComponentTwo} from "./component-two/component-two.component";
import {ComponentThree} from "./component-three/component-three.component";
import {ComponentFourteen} from "./component-fourteen/component-fourteen.component";
import {ComponentFiveteen} from "./component-fiveteen/component-fiveteen.component";
import {ComponentTwelve} from "./component-twelve/component-twelve.component";
import {ComponentThirteen} from "./component-thirteen/component-thirteen.component";
import {ComponentOne} from "./component-one/component-one.component";
import {OnPushChangeDetectionObservablesComponent} from "./on-push-change-detection-observables.component";
import {ComponentSixteen} from "./component-sixteen/component-sixteen.component";


@NgModule({
  declarations: [
    OnPushChangeDetectionObservablesComponent,
    ComponentOne,ComponentFour,ComponentTwo,ComponentThree,
    ComponentEight,ComponentNine,ComponentTwelve,ComponentThirteen,ComponentSix, ComponentSeven,ComponentSixteen,
    ComponentFive, ComponentTen,ComponentFourteen, ComponentFiveteen,ComponentEleven, ComponentFive, ComponentSix, ComponentSeven,ComponentSeventeen
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
  entryComponents: [TD_LOADING_ENTRY_COMPONENTS],
  exports: [OnPushChangeDetectionObservablesComponent]
})
export class OnPushChangeDetectionObservablesModule {
}
