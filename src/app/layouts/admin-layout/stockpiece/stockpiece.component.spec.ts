import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpieceComponent } from './stockpiece.component';

describe('StockpieceComponent', () => {
  let component: StockpieceComponent;
  let fixture: ComponentFixture<StockpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
