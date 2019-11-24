import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionformComponent } from './interventionform.component';

describe('InterventionformComponent', () => {
  let component: InterventionformComponent;
  let fixture: ComponentFixture<InterventionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
