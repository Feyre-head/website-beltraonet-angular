import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3PricingComponent } from './home3-pricing.component';

describe('Home3PricingComponent', () => {
  let component: Home3PricingComponent;
  let fixture: ComponentFixture<Home3PricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3PricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
