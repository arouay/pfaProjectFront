import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionlistComponent } from './interventionlist.component';

describe('InterventionlistComponent', () => {
  let component: InterventionlistComponent;
  let fixture: ComponentFixture<InterventionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
