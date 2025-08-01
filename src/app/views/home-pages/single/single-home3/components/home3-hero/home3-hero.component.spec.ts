import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3HeroComponent } from './home3-hero.component';

describe('Home3HeroComponent', () => {
  let component: Home3HeroComponent;
  let fixture: ComponentFixture<Home3HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
