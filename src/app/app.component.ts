import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhElementsModule } from '../../lib/phobos-elements/ph-elements.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PhElementsModule
  ],
  template: `<router-outlet />`,
  styles: [],
})

export class AppComponent {
  title = 'phobos-cloak';
}
