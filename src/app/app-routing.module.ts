import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TablesComponent} from "./components/tables/tables.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'datatable', component: TablesComponent },
  { path: 'login', component: LoginComponent },

];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule {


}
