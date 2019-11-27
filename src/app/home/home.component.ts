import { Component, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .redText {
        color: red;
      }

      .greenText{
        color: green;
      }
    `
  ]
})

export class HomeComponent implements OnInit {

  // ts
  // string interpolation related
  appName = 'Phone Book!';   // implicit data typing
  age = 30;
  isLoggedIn = true;
  skillsList: Array<string> = [
    'html', 'css', 'js'
  ];

  // property binding related
  developerName = 'Arun';
  
  // two way binding related
  courseName = 'Angular';

  constructor() { }

  ngOnInit() {
  }

  // event binding related
  onBtnClick( event) {
    console.log(event);
    alert('test');
  }

  
}
