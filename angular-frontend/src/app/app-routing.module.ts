import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  { path: 'add-client', component: AddClientComponent },
  { path: 'clients-list', component: ClientsListComponent },
  { path: 'delete-client', component: DeleteClientComponent },
  { path: 'update-client', component: UpdateClientComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routingComponents = [AddClientComponent, ClientsListComponent, DeleteClientComponent, UpdateClientComponent]

