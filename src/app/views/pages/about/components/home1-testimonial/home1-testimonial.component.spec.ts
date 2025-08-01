import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1TestimonialComponent } from './home1-testimonial.component';

describe('Home1TestimonialComponent', () => {
  let component: Home1TestimonialComponent;
  let fixture: ComponentFixture<Home1TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
