import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule ,ModalModule} from 'ngx-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { VenueComponent } from './venue/venue.component';
import { VendorComponent } from './vendor/vendor.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { EventCardComponent } from './event/event-card/event-card.component';
import { HomeEventsResolver } from './_resolvers/home-events.resolver';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventDetailsResolver } from './_resolvers/event-details.resolver';
import { CheckoutComponent } from './event/checkout/checkout.component';
import { SuccessComponent } from './event/success/success.component';
import { CreatorHomeComponent } from './creator/creator-home/creator-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreatorNavComponent } from './creator/creator-nav/creator-nav.component';
import { CreatorLeftComponent } from './creator/creator-left/creator-left.component';
import { CreateEventComponent } from './creator/create-event/create-event.component';
import { AllEventsComponent } from './creator/all-events/all-events.component';
import { CreatorAllEventResolver } from './_resolvers/creator-allevents.resolver';
import { ViewEventComponent } from './creator/view-event/view-event.component';
import { ViewEventsResolver } from './_resolvers/view-events.resolver';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    VenueComponent,
    VendorComponent,
    HomeComponent,
    NavComponent,
    EventCardComponent,
    EventDetailsComponent,
    CheckoutComponent,
    SuccessComponent,
    CreatorHomeComponent,
    AdminHomeComponent,
    CreatorNavComponent,
    CreatorLeftComponent,
    CreateEventComponent,
    AllEventsComponent,
    ViewEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['www.eventguru.ng'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    HomeEventsResolver,
    EventDetailsResolver,
    CreatorAllEventResolver,
    ViewEventsResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
