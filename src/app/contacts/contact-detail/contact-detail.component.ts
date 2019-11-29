import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styles: []
})
export class ContactDetailComponent implements OnInit {

  contactData: any;

  constructor( private contactService: ContactService, private activateRoute: ActivatedRoute ) {
 
  }

  // life cycle hook
  ngOnInit() {
    // read url parameters in angular 6, 7, 8
    const contactId = this.activateRoute.snapshot.paramMap.get('contactId');

    // ideal place for rest api calls
    this.contactService.getContactById(contactId)
      .subscribe( (res: any) => {
        console.log( res );
        this.contactData = res;
      });

  }

}
