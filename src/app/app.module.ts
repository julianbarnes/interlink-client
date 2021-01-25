import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsBrowseComponent } from './views/events-browse/events-browse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsBrowseModule } from './views/events-browse/events-browse.module';
import { EventsService } from './shared/services/events-service';
import { EventDetailComponent } from './views/event-detail/event-detail.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    EventsBrowseModule,
    HttpClientModule,
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
