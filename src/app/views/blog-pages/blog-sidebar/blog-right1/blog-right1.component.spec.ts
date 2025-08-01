import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRight1Component } from './blog-right1.component';

describe('BlogRight1Component', () => {
  let component: BlogRight1Component;
  let fixture: ComponentFixture<BlogRight1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRight1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
