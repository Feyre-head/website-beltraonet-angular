import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3SupportComponent } from './home3-support.component';

describe('Home3SupportComponent', () => {
  let component: Home3SupportComponent;
  let fixture: ComponentFixture<Home3SupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3SupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
