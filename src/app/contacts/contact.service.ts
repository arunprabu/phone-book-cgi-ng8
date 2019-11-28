import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { }


  createContact( contactData ) { // 1. get the data from comp
    console.log(contactData);

    // 2. send the data to rest api end point
      // 2.1. identify rest api url: https://jsonplaceholder.typicode.com/users
      // 2.2. identify the HTTP method: POST
      // 2.3. connect to the rest api using HttpClient
    return this.http.post('https://jsonplaceholder.typicode.com/users', contactData)
        .pipe( map( (res: any) => { // 3. get the resp from rest api
          console.log(res);
          return res; // 4. send the resp back to comp
        }));

  }

  getContacts() { // 1. get the req from comp
    console.log('Inside Service\'s getContacts method');
    // 2. send the req to rest api
      // 2.1. identify rest api url: https://jsonplaceholder.typicode.com/users
      // 2.2. identify the HTTP method: GET
      // 2.3. connect to the rest api using HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users')
        .pipe( map( (res: any[]) => { // 3. get the resp from rest api
          console.log(res);
          return res; // 4. send the resp back to comp
        }));
  }
}
