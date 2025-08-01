import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailContentComponent } from './blog-detail-content.component';

describe('BlogDetailContentComponent', () => {
  let component: BlogDetailContentComponent;
  let fixture: ComponentFixture<BlogDetailContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
