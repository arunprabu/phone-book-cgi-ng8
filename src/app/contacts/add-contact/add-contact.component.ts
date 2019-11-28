import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  // Step1: Create Form in TS
  contactForm: FormGroup;

  isSaved = false;

  constructor( private contactService: ContactService ) { // dep injection // 2.1 connect to the service

  }

  ngOnInit() {
    // Step2: Create Form Controls for the Form in TS
    this.contactForm = new FormGroup({
      // we'll create new form controls
      name: new FormControl('john', Validators.required), // Step5: work on validations
      email: new FormControl('a@b.com', [
                              Validators.required,
                              Validators.email
                            ]),
      phone: new FormControl('234234', Validators.required)
    });
    // Step3: Patch up HTML form with TS form -- ref html
  }

  onContactFormSubmitHandler() {
    // 1. capture the form data in ts
    console.log(this.contactForm.value);

    // 2. send the above data to service
    // 2.1 connect to the service
    // 2.2. send the data to the method
    this.contactService.createContact(this.contactForm.value)
      .subscribe( (res: any) => { // 3. get the resp from service
        console.log(res);
        // 4. patch it up with html
        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

  
}
