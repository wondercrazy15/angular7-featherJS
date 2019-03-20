import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'fill-contact',
  templateUrl: './fillcontact.component.html',
  styleUrls: ['./fillcontact.component.css']
})
export class FillContactComponent implements OnInit {
  private contact: Contact = null;
  private btnText: string = "Add";
  maxDate = new Date();
 
  constructor(private contactService: ContactService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {
    this.contact = new Contact();
 
  }

  ngOnInit() {
    //check query string parameter id, if it available the it is update otherwise it is add contact
    let id = this.route.snapshot.params['id'];
    if (id !== undefined && id !== null && id !== "") {
      this.btnText = "Update";
      this.getContact(id);
    }
  }

  //get contact by id
  private getContact(id) {
    this.contactService.getContact(id).subscribe(result => {
      this.contact = result;
      if (result !== undefined && result !== null && result.dateOfBirth !== undefined && result.dateOfBirth !== null) {
        this.contact.dateOfBirth = new Date(result.dateOfBirth);
      }
    })
  }

  // for amount textbox (numberonly)  
  private numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  //adding contact
  private addContact(contact) {
    this.contactService.addContanct(contact).subscribe(
      data => {
        this.toastr.success("Contact has been added successfully.", "Success")
        this.router.navigateByUrl("/overview")
      },
      error => {
        this.toastr.error("There is some issue. Please contact to administration.", "Error")
      }
    );
  }

  // editing contact
  private editContact(contact) {


    this.contactService.editContact(contact).subscribe(
      data => {
        this.toastr.success("Contact has been updated successfully.", "Success")
        this.router.navigateByUrl("/overview")
      },
      error => {
        this.toastr.error("There is some issue. Please contact to administration.", "Error")
      }
    );
  }

  onSubmit() {

    console.log(this.contact);
    if (this.contact.id !== undefined && this.contact.id !== null && this.contact.id !== 0) {
      this.editContact(this.contact)
    } else {
      this.addContact(this.contact);
    }
  }
}
