import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3CtaComponent } from './home3-cta.component';

describe('Home3CtaComponent', () => {
  let component: Home3CtaComponent;
  let fixture: ComponentFixture<Home3CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
