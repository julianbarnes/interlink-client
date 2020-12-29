import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EventsBrowseComponent } from './events-browse.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatFormField, MatFormFieldModule, MatSelect, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDetailComponent } from '../event-detail/event-detail.component';


@NgModule({
  declarations: [EventsBrowseComponent, EventDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [MatCardModule]
})
export class EventsBrowseModule { }
