import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNavItemsComponent } from './single-nav-items.component';

describe('SingleNavItemsComponent', () => {
  let component: SingleNavItemsComponent;
  let fixture: ComponentFixture<SingleNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleNavItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
