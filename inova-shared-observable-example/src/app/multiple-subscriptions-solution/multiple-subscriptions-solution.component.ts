import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {combineLatest, map, Observable, shareReplay, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResponse, httpRequestUrl} from "../models";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-multiple-subscriptions-solution',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './multiple-subscriptions-solution.component.html',
  styleUrl: './multiple-subscriptions-solution.component.css'
})
export class MultipleSubscriptionsSolutionComponent implements OnInit {
  public myFancyObservable1$!: Observable<string>;
  public myFancyObservable2$!: Observable<string>;
  public myFancyObservable3$!: Observable<string>;

  private someOtherObservable$!: Observable<void>;

  private readonly httpClient = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // This observable handels HTTP request on subscribe and is used with async pipe
    this.myFancyObservable1$ = this.httpClient.get<ApiResponse>(httpRequestUrl).pipe(
      map(response => response.title),
      tap(() => console.log('Observable 1 piped!')),
      shareReplay(1)
    );

    // This observable uses value from first on subscribe and is used with async pipe
    this.myFancyObservable2$ = this.myFancyObservable1$.pipe(
      map(value => `"${value}" from first observable!`),
      tap(() => console.log('Observable 2 piped!')),
      shareReplay(1)
    );

    // This observable uses value from first and second on subscribe and is used with async pipe
    this.myFancyObservable3$ = combineLatest([this.myFancyObservable1$, this.myFancyObservable2$]).pipe(
      map(([value1, value2]) => `"${value1}" and "${value2}" from both observables!`),
      tap(() => console.log('Observable 3 piped!')),
      shareReplay(1)
    );

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
