import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../add-client/client';
import { ApiService } from './api.service';

@Component({
  selector: 'update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private apiService:ApiService, private http: HttpClient) { }

  baseURL = "http://localhost:3000/clients/";

  client = new Client();
  clients: Client[] = [];
  idNumber!: any;
  idNumberMinusOne!: any;
  
  profileForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    telephone: new FormControl(),
    account: new FormControl()
  });

  ngOnInit(): void {

    if(this.clients.length == 0) {
      this.apiService.getPeople()
      .subscribe(data => {
        this.clients=data;
        console.log(this.clients[0].name + " api")
        this.queryParams();
      })  
    }
  }

onSubmit(event: any) {
    this.apiService.updateClient(this.profileForm.value, this.idNumber);
    alert("User has been updated");
    this.router.navigateByUrl('/clients-list');

}

refreshPeople() {
  this.apiService.getPeople()
    .subscribe(data => {
      this.clients=data;
    })      
}

queryParams() {
  this.route.queryParams
  .subscribe(params => {
    this.idNumber = params.id;
    this.idNumberMinusOne = this.idNumber - 1;
    console.log(this.idNumber + " IDNUMBER")
    console.log(this.idNumberMinusOne + "IDNUMBERMINUSONE")
     if (!this.profileForm.get("name")) {
      this.profileForm.get("name")?.setValue(this.clients[this.idNumberMinusOne]?.name);
      this.profileForm.get("address")?.setValue(this.clients[this.idNumberMinusOne]?.address);
      this.profileForm.get("telephone")?.setValue(this.clients[this.idNumberMinusOne]?.telephone);
      this.profileForm.get("account")?.setValue(this.clients[this.idNumberMinusOne]?.account);
      console.log("entra " + this.clients[params.id].name)
     } else {
      this.profileForm.get("id")?.setValue(this.clients[this.idNumberMinusOne]?.id);
       this.profileForm.get("name")?.setValue(this.clients[this.idNumberMinusOne]?.name);
       this.profileForm.get("address")?.setValue(this.clients[this.idNumberMinusOne]?.address);
       this.profileForm.get("telephone")?.setValue(this.clients[this.idNumberMinusOne]?.telephone);
       this.profileForm.get("account")?.setValue(this.clients[this.idNumberMinusOne]?.account);
       console.log("1 - n entra")
       console.log("2 - entra " + this.clients[this.idNumberMinusOne]?.account + " ??")
       console.log("3 - " + this.clients[this.idNumberMinusOne]?.name)
     }
    }
  )
}

}
