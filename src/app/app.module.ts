import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsBrowseComponent } from './views/events-browse/events-browse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsBrowseModule } from './views/events-browse/events-browse.module';
import { EventsService } from './shared/services/events-service';
import { EventDetailComponent } from './views/event-detail/event-detail.component';
import { RegisterComponent } from './views/register/register.component';
import { EventAddComponent } from './views/event-add/event-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { AccountComponent } from './views/events-browse/account/account.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    EventsBrowseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
