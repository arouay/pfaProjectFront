import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatslistComponent } from './etatslist.component';

describe('EtatslistComponent', () => {
  let component: EtatslistComponent;
  let fixture: ComponentFixture<EtatslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
