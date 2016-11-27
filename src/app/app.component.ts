import {Component, OnInit, OnDestroy, ViewContainerRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { AppService } from "./app.service";
 import { TdLoadingService, LoadingType, ILoadingOptions} from "@covalent/core";
import {DefaultChangeDetectionComponent} from "./default-change-detection/default-change-detection.component";
import {OnPushChangeDetectionComponent} from "./on-push-change-detection/on-push-change-detection.component";
import {OnPushChangeDetectionObservablesComponent} from "./on-push-change-detection-observables/on-push-change-detection-observables.component";
import {ManualChangeDetectionComponent} from "./manual-change-detection/manual-change-detection.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent   {

  title = 'app works!';
  items: Object[] = [
    {
      title: "Subject", route: "/", icon: "layout", description: "Can see the initial gap."
    },
    {
      title: "BehaviourSubject", route: "/behaviour", icon: "layout", description: "Last Item shown always."
    },
    {
      title: "AsyncPipe", route: "/asyncPipe", icon: "layout", description: "Control Change Detection."
    },

    {
      title: "WithError", route: "/withError", icon: "layout", description: "Handling error in async pipe."
    },{ title: 'default-change-detection',route: 'default-change-detection', description: 'default-change-detection' },
    {title: 'on-push-change-detection', route: 'on-push-change-detection', description: 'on-push-change-detection' },
    {title: 'on-push-change-detection-observables', route: 'on-push-change-detection-observables', description: "on-push-change-detection-observables" },
    { title: 'manual-change-detection',route: 'manual-change-detection', description: 'manual-change-detection' }
  ];
  @ViewChild(DefaultChangeDetectionComponent) defaultChangeDetectionCmp: DefaultChangeDetectionComponent;
   @ViewChild(OnPushChangeDetectionComponent) onPushChangeDetectionCmp: OnPushChangeDetectionComponent;
   @ViewChild(OnPushChangeDetectionObservablesComponent) onPushChangeDetectionObservablesCmp: OnPushChangeDetectionObservablesComponent;
  @ViewChild(ManualChangeDetectionComponent) manualChangeDetectionCmp: ManualChangeDetectionComponent;
  notifier: Subject<any> = new Subject();

  ngAfterViewChecked() {
    if (this.defaultChangeDetectionCmp) {
      this.defaultChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionCmp) {
      this.onPushChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionObservablesCmp) {
      this.onPushChangeDetectionObservablesCmp.notifier = this.notifier;
    }

    if (this.manualChangeDetectionCmp) {
      this.manualChangeDetectionCmp.notifier = this.notifier;
    }
  }
}
