import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductComponent} from "./product/product.component";
import {ItineraryComponent} from "./itinerary/itinerary.component";
import {UserComponent} from "./user/user.component";
import {CustomerComponent} from "./customer/customer.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

const approutes: Routes = [

    { path: '', redirectTo:'/dashboard',pathMatch:"full"},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'products', component: ProductComponent },
    { path: 'itineraries', component: ItineraryComponent },
    { path: 'user', component: UserComponent},
    { path: 'customer', component: CustomerComponent},
    { path: 'customer-detail', component: CustomerDetailComponent},


];

@NgModule({
    imports: [
        RouterModule.forRoot(approutes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}

