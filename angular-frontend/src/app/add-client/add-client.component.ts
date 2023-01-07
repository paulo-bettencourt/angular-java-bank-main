import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Client } from './client';


@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private apiService:ApiService, private router: Router) { }

  title = 'Angular Bank';
  client = new Client();
  clients: Client[] = [];

  ngOnInit(): void {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        this.clients=data;
      })      
  }

  addClient() {

    if(this.client.account == null) {
      alert("You need to select an account")
      return
    }

    this.apiService.addClient(this.client)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
        alert("User has been added");
        this.router.navigateByUrl('/clients-list');
      })      
  }

}