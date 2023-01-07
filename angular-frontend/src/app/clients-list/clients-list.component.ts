import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Client } from '../add-client/client';
import { ApiService } from './api.service';

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  collection: { id: number; }[];

  constructor(private apiService:ApiService) {

    this.collection = [{id: 1}, {id: 2}, {id: 3}];
   }

  clients: Client[] = [];
  baseURL = "http://localhost:3000/clients/";

  ngOnInit(): void {
    this.refreshPeople();
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        this.clients = [];
        this.clients=data;
      })      
  }

  deleteClient(event: any) {

    if(confirm("Are you sure to delete client number "+ event +"?")) {
      console.log(event);
      this.apiService.deleteClient(event);
      this.refreshPeople();
      console.log("fim")
    }
  }

trackByFn(index: any, item: any) {
  return index;
}


}
