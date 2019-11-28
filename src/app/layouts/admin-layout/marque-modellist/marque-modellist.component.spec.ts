import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueModellistComponent } from './marque-modellist.component';

describe('MarqueModellistComponent', () => {
  let component: MarqueModellistComponent;
  let fixture: ComponentFixture<MarqueModellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueModellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueModellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
