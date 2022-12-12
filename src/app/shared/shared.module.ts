import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [NavBarComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [ NavBarComponent, MatIconModule, MatToolbarModule, MatSelectModule ]
})
export class SharedModule { }
