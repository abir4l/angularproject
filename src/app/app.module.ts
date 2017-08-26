import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {RouterModule, Routes} from "@angular/router";
import { ItineraryComponent } from './itinerary/itinerary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';

//
// const approutes:Routes=[
//
//   { path: '',
//     redirectTo: '/products',
//     pathMatch: 'full'
//   },
//   {path:'products',component:ProductComponent}
//
// ];



const approutes:Routes=[

  { path: '', redirectTo:'/dashboard',pathMatch:"full"},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'products', component: ProductComponent },
  { path: 'itineraries', component: ItineraryComponent },
  { path: 'user', component: UserComponent},
  { path: 'customer', component: CustomerComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ItineraryComponent,
    DashboardComponent,
    UserComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
