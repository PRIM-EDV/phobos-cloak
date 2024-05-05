import { Component } from '@angular/core';
import { PhElementsModule } from '../../../lib/phobos-elements/ph-elements.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PhElementsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public view: string = "TACOP";
  public tab: string = "MAP"
}
