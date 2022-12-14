import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-car'},
  { path: 'create-car', component: CarCreateComponent },
  { path: 'cars-list', component: CarListComponent },
  { path: 'car-edit/:id', component: CarEditComponent },
  { path: 'car-details', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
