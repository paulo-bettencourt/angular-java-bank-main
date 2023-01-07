import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Recipient } from './recipient';

@Component({
  selector: 'add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.css']
})
export class AddRecipientComponent implements OnInit {

  constructor(private apiService:ApiService, private router: Router) { }

  title = 'Angular Bank';
  recipient = new Recipient();
  recipients: Recipient[] = [];

  ngOnInit(): void {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        this.recipients=data;
      })      
  }

  addRecipient() {

    if(this.recipient.account == null) {
      alert("You need to select an account")
      return
    }

    this.apiService.addRecipient(this.recipient)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
        alert("User has been added");
        this.router.navigateByUrl('/clients-list');
      })      
  }

}
