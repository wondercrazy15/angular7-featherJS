import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Contact } from 'src/app/model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  APi_URL=environment.api_url;
 
  constructor(private httpclient:HttpClient) { }
  //get contactList
  getContacts(){
    return this.httpclient.get(this.APi_URL+"contact")
    .pipe(
      tap((res: Contact[]) => { return res })
      );
  }

  //fetch contact by id
  getContact(id){
    return this.httpclient.get(this.APi_URL+"contact/"+id)
     .pipe(
       tap((res: Contact) => { return res })
       );
  }

  // add contact
  addContanct(contactdata:Contact){
   return this.httpclient.post(this.APi_URL+"contact",contactdata)
  }

  // delete contact
  deleteContact(id){
    return this.httpclient.delete(this.APi_URL+"contact/"+id);
  }

  // edit contact
  editContact(contactdata:Contact){
    return this.httpclient.put(this.APi_URL+"contact/"+contactdata.id,contactdata)
  }

}
