import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMobileMenuComponent } from './single-mobile-menu.component';

describe('SingleMobileMenuComponent', () => {
  let component: SingleMobileMenuComponent;
  let fixture: ComponentFixture<SingleMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMobileMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
