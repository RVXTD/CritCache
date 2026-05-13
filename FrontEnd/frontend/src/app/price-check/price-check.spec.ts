import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCheck } from './price-check';

describe('PriceCheck', () => {
  let component: PriceCheck;
  let fixture: ComponentFixture<PriceCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceCheck],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceCheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
