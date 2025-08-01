import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRight2Component } from './blog-right2.component';

describe('BlogRight2Component', () => {
  let component: BlogRight2Component;
  let fixture: ComponentFixture<BlogRight2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRight2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
