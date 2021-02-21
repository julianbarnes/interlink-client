import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EventsBrowseComponent } from './events-browse.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatButtonModule, MatFormField, MatFormFieldModule, MatIconModule, MatSelect, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { EventScrollComponent } from './event-scroll/event-scroll.component';
import { EventCategoriesComponent } from './event-categories/event-categories.component';
import { CategoryCardComponent } from './event-categories/category-card/category-card.component';
import { AccountComponent } from './account/account.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [EventsBrowseComponent, EventDetailComponent, EventScrollComponent, EventCategoriesComponent, CategoryCardComponent, AccountComponent, CategoryBarComponent, DropdownComponent],
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
