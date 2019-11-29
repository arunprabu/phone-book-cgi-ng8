import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

// Step 2 in routing
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/add', component: AddContactComponent},
  { path: 'contacts/:contactId', component: ContactDetailComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // step3: registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
