import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientsListComponent } from './clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipientComponent } from './add-recipient/add-recipient.component';
import { RecipientsListComponent } from './recipients-list/recipients-list.component';
import { DeleteRecipientComponent } from './delete-recipient/delete-recipient.component';
import { UpdateRecipientComponent } from './update-recipient/update-recipient.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddRecipientComponent,
    RecipientsListComponent,
    DeleteRecipientComponent,
    UpdateRecipientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [ClientsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
