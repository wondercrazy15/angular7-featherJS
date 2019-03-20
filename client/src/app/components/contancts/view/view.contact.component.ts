import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
import { Contact } from 'src/app/model/contact.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'view-contact',
  templateUrl: './view.contact.component.html',
  styleUrls: ['./view.contact.component.css']
})
export class ViewContactComponent implements OnInit {
  private contact: Contact
  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private toastr: ToastrService,
  ) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.getContact();
  }

  //get contact by id
  private getContact() {
    let id = this.route.snapshot.params['id'];
    if (id !== undefined && id !== null && id !== "") {
      this.contactService.getContact(id).subscribe(result => {
        this.contact = result;
      },
        error => {
          this.toastr.error("There is some issue. Please contact to administration.", "Error")
        })
    }
  }



}
