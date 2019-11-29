import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: any[] = [];
  contactsSubscription: Subscription;  

  constructor( private contactService: ContactService) {
    console.log('Inside Constructor');
  }

  // Life Cycle Hook
  ngOnInit() {
    // ideal place for rest api calls
    console.log('Inside ngOnInit');
    // 1. send req to service
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe( (res: any[]) => { // 2. get the resp from service
        console.log( res );
        this.contactList = res;
      });

  }

  ngOnDestroy() {
    // ideal place for unsubscribe, remove data, empty array
    console.log('inside destroy');
    this.contactsSubscription.unsubscribe();

    if (this.contactList) {
      this.contactList.length = 0;
    }
  }


}
