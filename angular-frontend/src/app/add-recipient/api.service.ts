import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipient } from './recipient';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/";

  getPeople(): Observable<Recipient[]> {
    console.log('getPeople '+this.baseURL + 'angularbank/recipients')
    return this.http.get<Recipient[]>(this.baseURL + 'angularbank/recipients')
  }

  addRecipient(person:Recipient): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body);
    return this.http.post(this.baseURL + '/angularbank/add', body,{'headers':headers})
  }
}
