import {Component, Input} from '@angular/core';

/**
 * @title Basic toolbar
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css'],
})
export class NavBarComponent {
  @Input() title: string;
}
