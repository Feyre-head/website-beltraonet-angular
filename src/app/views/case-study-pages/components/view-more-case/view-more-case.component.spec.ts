import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreCaseComponent } from './view-more-case.component';

describe('ViewMoreCaseComponent', () => {
  let component: ViewMoreCaseComponent;
  let fixture: ComponentFixture<ViewMoreCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMoreCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
