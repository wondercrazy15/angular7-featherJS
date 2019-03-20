import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'overview-contact',
  templateUrl: './overview.contact.component.html',
  styleUrls: ['./overview.contact.component.css']
})
export class OverviewContactComponent implements OnInit {
  private Contacts: Contact[] = [];

  constructor(private contactService: ContactService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getAllContacts();
  }

  //get all contact
  getAllContacts() {
    this.contactService.getContacts().subscribe(result => {
      this.Contacts = result;
    });
  }

  //delete contact
  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe(
      data => {
        this.toastr.success("Contact has been deleted successfully.", "Success")
        this.getAllContacts();
      },
      error => {
        this.toastr.error("There is some issue. Please contact to administration.", "Error")
      }
    );
  }
}
