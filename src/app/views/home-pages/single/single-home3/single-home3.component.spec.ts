import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHome3Component } from './single-home3.component';

describe('SingleHome3Component', () => {
  let component: SingleHome3Component;
  let fixture: ComponentFixture<SingleHome3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHome3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
