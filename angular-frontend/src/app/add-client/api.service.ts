import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/";

  getPeople(): Observable<Client[]> {
    console.log('getPeople '+this.baseURL + 'angularbank/clients')
    return this.http.get<Client[]>(this.baseURL + 'angularbank/clients')
  }

  addClient(person:Client): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body);
    return this.http.post(this.baseURL + '/angularbank/add', body,{'headers':headers})
  }
  
}