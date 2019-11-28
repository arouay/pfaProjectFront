import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueModelformComponent } from './marque-modelform.component';

describe('MarqueModelformComponent', () => {
  let component: MarqueModelformComponent;
  let fixture: ComponentFixture<MarqueModelformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueModelformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueModelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
