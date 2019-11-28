import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: any[];

  constructor( private contactService: ContactService) {
    console.log('Inside Constructor');
  }

  // Life Cycle Hook
  ngOnInit() {
    // ideal place for rest api calls
    console.log('Inside ngOnInit');
    // 1. send req to service
    this.contactService.getContacts()
      .subscribe( (res: any[]) => { // 2. get the resp from service
        console.log( res );
        this.contactList = res;
      });

  }

}
