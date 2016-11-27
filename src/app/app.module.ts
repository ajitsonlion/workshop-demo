import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CovalentCoreModule, TD_LOADING_ENTRY_COMPONENTS} from "@covalent/core";
import {CovalentChipsModule} from "@covalent/chips";
import {CovalentChartsModule} from "@covalent/charts";
import {CovalentDataTableModule} from "@covalent/data-table";
import {CovalentFileModule} from "@covalent/file-upload";
import {CovalentHttpModule} from "@covalent/http";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentJsonFormatterModule} from "@covalent/json-formatter";
import {RequestInterceptor} from "../config/interceptors/request.interceptor";
 import {appRoutes} from "./app.routes";
 import {AppService} from "./app.service";
import { SubjectComponent } from './subject/subject.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { WithOnPushComponent } from './async/with-on-push/with-on-push.component';
import {SubjectService} from "./subject/subject.service";
import {BehaviorSubjectService} from "./behaviour/behaviorSubject.service";
 import {WithOnPushService} from "./async/with-on-push/with-on-push.service";
import { UserComponent } from './async/user/user.component';
import {DefaultChangeDetectionModule} from "./default-change-detection/default-change.module";
import {ManualChangeDetectionModule} from "./manual-change-detection/manual-change.module";
import {OnPushChangeDetectionObservablesModule} from "./on-push-change-detection-observables/on-push-observable.module";
import {OnPushChangeDetectionModule} from "./on-push-change-detection/on-push.module";
import {ToggleStateService} from "./toggle-state.service";

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BehaviourComponent,
    WithOnPushComponent,
     UserComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DefaultChangeDetectionModule,
    ManualChangeDetectionModule,
    OnPushChangeDetectionObservablesModule,
    OnPushChangeDetectionModule,
     CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentChipsModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHttpModule.forRoot([RequestInterceptor]),
    CovalentHighlightModule.forRoot(),
    CovalentJsonFormatterModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
      appRoutes
  ],
  providers: [
    //appRoutingProviders,
    Title,
    AppService,
    SubjectService,
    BehaviorSubjectService,
    WithOnPushService,ToggleStateService
  ], // additional providers needed for this module
  entryComponents: [ TD_LOADING_ENTRY_COMPONENTS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
