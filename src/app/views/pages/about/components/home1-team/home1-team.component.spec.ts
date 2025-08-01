import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1TeamComponent } from './home1-team.component';

describe('Home1TeamComponent', () => {
  let component: Home1TeamComponent;
  let fixture: ComponentFixture<Home1TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1TeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
