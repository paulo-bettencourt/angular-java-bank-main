import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../add-client/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:8080/";

  deleteClient(event: any) {
    this.http.delete(this.baseURL + 'angularbank/delete/' + event)
    .subscribe(() => console.log('Delete successful'));
}

getPeople(): Observable<Client[]> {
  console.log('getPeople '+this.baseURL + 'angularbank/clients')
  return this.http.get<Client[]>(this.baseURL + 'angularbank/clients')
}

}
