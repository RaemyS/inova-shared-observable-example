import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSubscriptionsSolutionComponent } from './multiple-subscriptions-solution.component';

describe('MultipleSubscriptionsSolutionComponent', () => {
  let component: MultipleSubscriptionsSolutionComponent;
  let fixture: ComponentFixture<MultipleSubscriptionsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSubscriptionsSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleSubscriptionsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
