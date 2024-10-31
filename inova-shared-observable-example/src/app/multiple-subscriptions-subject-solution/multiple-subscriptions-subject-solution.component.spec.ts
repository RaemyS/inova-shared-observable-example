import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSubscriptionsSubjectSolutionComponent } from './multiple-subscriptions-subject-solution.component';

describe('MultipleSubscriptionsSubjectSolutionComponent', () => {
  let component: MultipleSubscriptionsSubjectSolutionComponent;
  let fixture: ComponentFixture<MultipleSubscriptionsSubjectSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSubscriptionsSubjectSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleSubscriptionsSubjectSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
