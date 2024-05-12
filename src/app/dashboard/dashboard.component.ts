import { Component } from '@angular/core';
import { PhElementsModule } from '../../../lib/phobos-elements/ph-elements.module';
import { PhChartsModule } from "../../../lib/ph-charts/ph-charts.module";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [
      CommonModule,
      PhElementsModule,
      PhChartsModule]
})
export class DashboardComponent {
  public view: string = "TACOP";
  public tab: string = "MAP"

  public data = [[5, 10, 8], [0, 12, 3]];
  // public data = [[10]]

  ngOnInit() {
    // this.data = [[5, 10, 8], [0, 12, 3]];
    // this.data = [[10]]
    setInterval(this.blub.bind(this), 5000);
  }

  blub() {
    if (JSON.stringify(this.data) === JSON.stringify([[50, 100, 80], [0, 120, 30]])) {
      this.data = [[70, 70, 70], [70, 70, 70]];
    } else {
      this.data = [[50, 100, 80], [0, 120, 30]];
    }
  }
}
