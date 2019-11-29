import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  isLoggedIn = true;

  skillsList: string[] = [
    'html', 'css', 'js'
  ];
  
  today: Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
