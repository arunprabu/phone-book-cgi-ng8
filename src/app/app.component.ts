import { Component } from '@angular/core';

// unified by @Component
@Component({
  selector: 'app-root', // component exposed in this selector
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.css'] // css
})
export class AppComponent {
  // ts
  title = 'phone-book';

}
