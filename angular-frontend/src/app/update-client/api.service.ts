import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../add-client/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/";

  [x: string]: any;

  updateClient(event: any, id: number) {
    this.http.put<any>("http://localhost:8080/angularbank/update/", {
      "id": event.id,
      "name": event.name,
      "address": event.address,
      "telephone": event.telephone,
      "account": event.account,
    })
    .subscribe(data => this.postId = data.id);
  }

  getPeople(): Observable<Client[]> {
    console.log('getPeople '+this.baseURL + 'angularbank/clients')
    return this.http.get<Client[]>(this.baseURL + 'angularbank/clients')
  }

}
