import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailSidebarComponent } from './blog-detail-sidebar.component';

describe('BlogDetailSidebarComponent', () => {
  let component: BlogDetailSidebarComponent;
  let fixture: ComponentFixture<BlogDetailSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
