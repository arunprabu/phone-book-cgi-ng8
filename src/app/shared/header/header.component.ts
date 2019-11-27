import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Decorator
@Component({
  selector: 'app-header',  // selector
  templateUrl: './header.component.html',  // html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {
  //  ts

  constructor() { }

  ngOnInit() {
  }

}
