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
  duplicateContactData: any;
  isUpdated = false;

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

  onEditClickHandler() {
    // duplicate obj
    this.duplicateContactData  = JSON.parse(JSON.stringify(this.contactData));
    this.isUpdated = false;
  }

  async onUpdateHandler( formData ) {
    console.log(formData); // you can work with the above formData for implementing more validations 

    console.log(this.duplicateContactData);

    const status: any  = await this.contactService.updateContact(this.duplicateContactData);
    console.log(status);
    this.contactData = status;

    if (status) {
      this.isUpdated = true;
    }
  }
  
}
