import { Component } from '@angular/core';

import { ColorEvent } from '@learnsterdev/ngx-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  primaryColor = '#194D33';
  state = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
  };

  changeComplete($event: ColorEvent): void {
    this.state = $event.color.hsl;
    this.primaryColor = $event.color.hex;
    console.log('changeComplete', $event);
  }
}
