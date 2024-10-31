import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResponse, httpRequestUrl} from "../models";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-multiple-subscriptions-subject-solution',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './multiple-subscriptions-subject-solution.component.html',
  styleUrl: './multiple-subscriptions-subject-solution.component.css'
})
export class MultipleSubscriptionsSubjectSolutionComponent implements OnInit {
  public readonly myFancyObservable1$ = new BehaviorSubject('');
  public readonly myFancyObservable2$ = new BehaviorSubject('');
  public readonly myFancyObservable3$ = new BehaviorSubject('');

  private someOtherObservable$!: Observable<void>;

  private readonly httpClient = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // This observable handels HTTP request on subscribe and is used with async pipe
    this.httpClient.get<ApiResponse>(httpRequestUrl).pipe(
      map(response => response.title),
      tap((value) => this.myFancyObservable1$.next(value)),
      tap(() => console.log('Observable 1 piped!'))
    ).subscribe();

    // This observable uses value from first on subscribe and is used with async pipe
    this.myFancyObservable1$.pipe(
      map(value => `"${value}" from first observable!`),
      tap((value) => this.myFancyObservable2$.next(value)),
      tap(() => console.log('Observable 2 piped!')),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();

    // This observable uses value from first and second on subscribe and is used with async pipe
    combineLatest([this.myFancyObservable1$, this.myFancyObservable2$]).pipe(
      map(([value1, value2]) => `"${value1}" and "${value2}" from both observables!`),
      tap((value) => this.myFancyObservable3$.next(value)),
      tap(() => console.log('Observable 3 piped!')),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();

    // This observable uses value from first, second and third on subscribe...
    this.someOtherObservable$ = combineLatest([this.myFancyObservable1$, this.myFancyObservable2$, this.myFancyObservable3$]).pipe(
      tap(() => console.log('Other observable piped!')),
      map(() => void 0)
    );

    // ... and is subscribed here locally
    this.someOtherObservable$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
