import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAboutComponent } from './service-about.component';

describe('ServiceAboutComponent', () => {
  let component: ServiceAboutComponent;
  let fixture: ComponentFixture<ServiceAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
