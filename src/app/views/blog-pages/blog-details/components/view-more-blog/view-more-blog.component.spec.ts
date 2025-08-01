import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreBlogComponent } from './view-more-blog.component';

describe('ViewMoreBlogComponent', () => {
  let component: ViewMoreBlogComponent;
  let fixture: ComponentFixture<ViewMoreBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMoreBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
