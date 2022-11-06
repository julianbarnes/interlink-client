import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EventAddComponent } from './views/event-add/event-add.component';
import { EventDetailComponent } from './views/event-detail/event-detail.component';
import { EventsBrowseComponent } from './views/events-browse/events-browse.component'
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RegisterComponent } from './views/register/register.component';
import { SecureComponent } from './views/secure/secure.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'events', component: EventsBrowseComponent},
  { path: 'event-detail/:eventId', component: EventDetailComponent},
  { path: 'events/add', component: EventAddComponent},
  { path: 'test', component: TestComponent},
  { path: 'secure', canActivate: [ AuthGuard ], component: SecureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
