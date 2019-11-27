import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // inline template
  template: `
  <div class="text-center">
    <hr>
    <app-nav>
      <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
      </li>
    </app-nav>
    <p class="greyText">
      Copyright &copy; 2019 | CGI
    </p>
  </div>
  `,
  styles: [
    `
      .greyText{
        color: grey;
      }
    `
  ]  // inline css
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
