import {Routes, RouterModule} from '@angular/router';
import {SubjectComponent} from "./subject/subject.component";
import {BehaviourComponent} from "./behaviour/behaviour.component";
import {WithOnPushComponent} from "./async/with-on-push/with-on-push.component";
 import {OnPushChangeDetectionComponent} from "./on-push-change-detection/on-push-change-detection.component";
import {OnPushChangeDetectionObservablesComponent} from "./on-push-change-detection-observables/on-push-change-detection-observables.component";
import {ManualChangeDetectionComponent} from "./manual-change-detection/manual-change-detection.component";
import {DefaultChangeDetectionComponent} from "./default-change-detection/default-change-detection.component";


const routes: Routes = [

  {
    path: '',
    children: [{
      path: '', component: SubjectComponent
    },
      {
        path: 'behaviour', component: BehaviourComponent
      },
      {
        path: 'asyncPipe', component: WithOnPushComponent
      },
      { path: 'default-change-detection', component: DefaultChangeDetectionComponent },
      { path: 'on-push-change-detection', component: OnPushChangeDetectionComponent },
      { path: 'on-push-change-detection-observables', component: OnPushChangeDetectionObservablesComponent },
      { path: 'manual-change-detection', component: ManualChangeDetectionComponent }]
  }
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
