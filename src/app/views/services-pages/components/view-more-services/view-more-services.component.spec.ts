import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreServicesComponent } from './view-more-services.component';

describe('ViewMoreServicesComponent', () => {
  let component: ViewMoreServicesComponent;
  let fixture: ComponentFixture<ViewMoreServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMoreServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
