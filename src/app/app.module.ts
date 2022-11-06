import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthInterceptor } from './auth.interceptor';
import { LoginComponent } from './views/login/login.component';
import { SecureComponent } from './views/secure/secure.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EventAddComponent,
    LoginComponent,
    SecureComponent,
    NotFoundComponent
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
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    EventsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
