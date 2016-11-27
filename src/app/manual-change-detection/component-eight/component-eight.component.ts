import {Component, NgZone, ElementRef} from '@angular/core';
 import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-eight',
  template: `
    <a>Cmp8</a>

    <ul>
      <li><cmp-sixteen></cmp-sixteen></li>
    </ul>
  `,
 })
export class ComponentEight {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
