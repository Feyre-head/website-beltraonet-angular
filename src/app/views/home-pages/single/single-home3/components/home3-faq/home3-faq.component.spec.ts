import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3FaqComponent } from './home3-faq.component';

describe('Home3FaqComponent', () => {
  let component: Home3FaqComponent;
  let fixture: ComponentFixture<Home3FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3FaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
