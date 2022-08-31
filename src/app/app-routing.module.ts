import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventAddComponent } from './views/event-add/event-add.component';
import { EventDetailComponent } from './views/event-detail/event-detail.component';
import { EventsBrowseComponent } from './views/events-browse/events-browse.component'

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'events', component: EventsBrowseComponent},
  { path: 'event-detail/:eventId', component: EventDetailComponent},
  { path: 'events/add', component: EventAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
