import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3FeaturesComponent } from './home3-features.component';

describe('Home3FeaturesComponent', () => {
  let component: Home3FeaturesComponent;
  let fixture: ComponentFixture<Home3FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3FeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
