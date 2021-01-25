import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EventsBrowseComponent } from './events-browse.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatButtonModule, MatFormField, MatFormFieldModule, MatIconModule, MatSelect, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [EventsBrowseComponent, EventDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [MatCardModule]
})
export class EventsBrowseModule { }
