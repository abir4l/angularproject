import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import {AppRoutingModule} from "./app-routing.module";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {CustomerService} from "./customer/customer.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ItineraryComponent,
    DashboardComponent,
    UserComponent,
    CustomerComponent,
    CustomerDetailComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
