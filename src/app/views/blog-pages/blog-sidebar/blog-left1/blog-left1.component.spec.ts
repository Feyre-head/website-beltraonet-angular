import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeft1Component } from './blog-left1.component';

describe('BlogLeft1Component', () => {
  let component: BlogLeft1Component;
  let fixture: ComponentFixture<BlogLeft1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLeft1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLeft1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
