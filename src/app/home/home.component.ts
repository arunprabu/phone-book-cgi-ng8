import { Component, OnInit, ViewChild } from '@angular/core';
import { CpbComponent } from './cpb/cpb.component';

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

  // accessing child comp's data using @ViewChild and store it in local variable 
  @ViewChild(CpbComponent, {static: true}) childCompData: any;

  constructor() { }

  ngOnInit() {
    // child comp data is in local variable childCompData
    console.log(this.childCompData);
  }

  // event binding related
  onBtnClick( event) {
    console.log(event);
    alert('test');
  }

  
}
