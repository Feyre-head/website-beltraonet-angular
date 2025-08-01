import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3AboutComponent } from './home3-about.component';

describe('Home3AboutComponent', () => {
  let component: Home3AboutComponent;
  let fixture: ComponentFixture<Home3AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
