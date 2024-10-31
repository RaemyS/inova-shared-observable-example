import { Routes } from '@angular/router';
import {MultipleSubscriptionsComponent} from "./multiple-subscriptions/multiple-subscriptions.component";
import {
  MultipleSubscriptionsSolutionComponent
} from "./multiple-subscriptions-solution/multiple-subscriptions-solution.component";
import {
  MultipleSubscriptionsSubjectSolutionComponent
} from "./multiple-subscriptions-subject-solution/multiple-subscriptions-subject-solution.component";

export const routes: Routes = [
  { path: 'multiple-subscriptions', component: MultipleSubscriptionsComponent },
  { path: 'multiple-subscriptions-solution', component: MultipleSubscriptionsSolutionComponent },
  { path: 'multiple-subscriptions-subject-solution', component: MultipleSubscriptionsSubjectSolutionComponent },
  { path: '', redirectTo: '/multiple-subscriptions', pathMatch: 'full' }
];
