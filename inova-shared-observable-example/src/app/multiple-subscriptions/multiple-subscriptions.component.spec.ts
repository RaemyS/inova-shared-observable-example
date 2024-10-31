import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSubscriptionsComponent } from './multiple-subscriptions.component';

describe('MultipleSubscriptionsComponent', () => {
  let component: MultipleSubscriptionsComponent;
  let fixture: ComponentFixture<MultipleSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSubscriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
