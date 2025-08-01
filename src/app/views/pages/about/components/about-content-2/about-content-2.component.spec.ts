import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContent2Component } from './about-content-2.component';

describe('AboutContent2Component', () => {
  let component: AboutContent2Component;
  let fixture: ComponentFixture<AboutContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
