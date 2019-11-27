import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeformComponent } from './typeform.component';

describe('TypeformComponent', () => {
  let component: TypeformComponent;
  let fixture: ComponentFixture<TypeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
