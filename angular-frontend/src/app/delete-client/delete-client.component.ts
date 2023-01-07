import { Component, OnInit } from '@angular/core';
import { Client } from '../add-client/client';
import { ApiService } from './api.service';

@Component({
  selector: 'delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  clients: Client[] = [];
  client = new Client();

  select_id = document.getElementById("client-list");

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.refreshPeople();
  }
 
  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        this.clients=data;
      })      
  }

  deleteClient(event: any) {

    if(confirm("Are you sure to delete client number "+ event.client.name +"?")) {
      console.log(event.client.name + " NOME DO CLIENTE");
      this.apiService.deleteClient(event.client.name);
      this.refreshPeople();
      console.log("apagou")
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}