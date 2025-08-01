import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeft2Component } from './blog-left2.component';

describe('BlogLeft2Component', () => {
  let component: BlogLeft2Component;
  let fixture: ComponentFixture<BlogLeft2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLeft2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLeft2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
