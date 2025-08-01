import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3WorkComponent } from './home3-work.component';

describe('Home3WorkComponent', () => {
  let component: Home3WorkComponent;
  let fixture: ComponentFixture<Home3WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
