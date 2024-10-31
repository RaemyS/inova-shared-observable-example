# InovaSharedObservableExample

Dieses Projekt zeigt die Fallstricke beim mehrfachen Subscribe von Observables.


## Szenario und Problematik

Wird mit Subscriptions (auch impliziten durch die Async-Pipe) nicht vorsichtig umgegangen,
dann können Netzwerk-Operationen und Side-Effects von Observables vervielfacht ausgeführt werden.

Das Beispiel unter http://localhost:4200/multiple-subscriptions zeigt diese Probleme:
* Netzwerk-Call wird 8 mal ausgeführt, statt nur einmal wie erwartet und erwünscht!
* Konsolen-Logs werden als Side-Effect mehrfach geschrieben, anstatt nur einmal pro Observable!


## Aufgabe

Die Komponente `MultipleSubscriptionsComponent` muss so angepasst werden, dass keine mehrfachen
API-Aufrufe und Side-Effects mehr geschehen.


## Lösung

* Mit Observables:
http://localhost:4200/multiple-subscriptions-solution (`MultipleSubscriptionsSolutionComponent`)

* Mit BehaviorSubjects:
http://localhost:4200/multiple-subscriptions-subject-solution
(`MultipleSubscriptionsSubjectSolutionComponent`, immer noch mehrere vervielfachte Side-Effect-Aufrufe)
