import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  // for custom property binding
  @Input() age = 20; // @Input() will make age as property

  someRandomData: any = 'test';

  constructor() { }

  ngOnInit() {
  }

}
