import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { }

  REST_API_URL = 'https://jsonplaceholder.typicode.com/users/';

  createContact( contactData ) { // 1. get the data from comp
    console.log(contactData);

    // 2. send the data to rest api end point
      // 2.1. identify rest api url: https://jsonplaceholder.typicode.com/users
      // 2.2. identify the HTTP method: POST
      // 2.3. connect to the rest api using HttpClient

    const createContactPromise = new Promise( ( resolve, reject )  => {
      this.http.post(this.REST_API_URL, contactData)
        .toPromise()
        .then( (res: any) => {
          console.log(res);
          resolve(res);
        })
        .catch( (err: any) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('Promise over');
        });
    });

    return createContactPromise;

  }

  getContacts() { // 1. get the req from comp
    console.log('Inside Service\'s getContacts method');
    // 2. send the req to rest api
      // 2.1. identify rest api url: https://jsonplaceholder.typicode.com/users
      // 2.2. identify the HTTP method: GET
      // 2.3. connect to the rest api using HttpClient
    return this.http.get(this.REST_API_URL)
        .pipe( map( (res: any[]) => { // 3. get the resp from rest api
          console.log(res);
          // ideal place to sort, filter, enrich data
          return res; // 4. send the resp back to comp
        }));
  }

  getContactById(id) {
    console.log(id);
    const REST_API_URL_CONTACT = this.REST_API_URL + id;
    return this.http.get(REST_API_URL_CONTACT)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));

  }

  updateContact( contactData ){
    console.log(contactData);

    const updateContactPromise = new Promise( (resolve, reject) => {
      this.http.put(this.REST_API_URL + contactData.id, contactData)
      .toPromise()
      .then( (res: any) => {
        console.log(res);
        resolve(res);
      })
      .catch( (err: any) => {
        console.log(err);
        reject(err);
      })
      .finally(() => {
        console.log('Promise over');
      });
    });

    return updateContactPromise;

  }
}
