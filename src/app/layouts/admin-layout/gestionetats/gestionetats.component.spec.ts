import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionetatsComponent } from './gestionetats.component';

describe('GestionetatsComponent', () => {
  let component: GestionetatsComponent;
  let fixture: ComponentFixture<GestionetatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionetatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionetatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
