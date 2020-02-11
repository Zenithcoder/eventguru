import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { VenueComponent } from './venue/venue.component';
import { RegisterComponent } from './register/register.component';
import { VendorComponent } from './vendor/vendor.component';
import { HomeComponent } from './home/home.component';
import { HomeEventsResolver } from './_resolvers/home-events.resolver';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventDetailsResolver } from './_resolvers/event-details.resolver';
import { CheckoutComponent } from './event/checkout/checkout.component';
import { SuccessComponent } from './event/success/success.component';
import { CreatorHomeComponent } from './creator/creator-home/creator-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateEventComponent } from './creator/create-event/create-event.component';
import { AllEventsComponent } from './creator/all-events/all-events.component';
import { CreatorAllEventResolver } from './_resolvers/creator-allevents.resolver';
import { ViewEventComponent } from './creator/view-event/view-event.component';
import { ViewEventsResolver } from './_resolvers/view-events.resolver';


const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {events: HomeEventsResolver}},
  {path: 'home', component: HomeComponent, resolve: {events: HomeEventsResolver}},
  {path: 'event/:id', component: EventDetailsComponent, resolve: {event: EventDetailsResolver}},
  {path: 'checkout/:id', component: CheckoutComponent, resolve: {event: EventDetailsResolver}},
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vendor', component: VendorComponent},
  {path: 'venue', component: VenueComponent},
  {path: 'success', component: SuccessComponent}, 
  {path: 'creator/home', component: CreatorHomeComponent},
  {path: 'all/event', component: AllEventsComponent, resolve: {events: CreatorAllEventResolver}},
  {path: 'creator/event', component: CreateEventComponent},
  {path: 'creator/event/view/:id', component: ViewEventComponent, resolve: {event: ViewEventsResolver}},
  {path: 'admin/home', component: AdminHomeComponent},
  
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
