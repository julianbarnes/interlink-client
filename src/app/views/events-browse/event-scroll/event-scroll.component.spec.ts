import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScrollComponent } from './event-scroll.component';

describe('EventScrollComponent', () => {
  let component: EventScrollComponent;
  let fixture: ComponentFixture<EventScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
