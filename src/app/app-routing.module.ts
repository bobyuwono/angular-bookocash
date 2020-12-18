import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SalesComponent} from './sales/sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuPageComponent } from "./menu-page/menu-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";

const routes: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'menu', component: MenuPageComponent},
  {path:'sales', component: SalesComponent},
  {path:'order', component: OrderPageComponent},  
  {path:'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
