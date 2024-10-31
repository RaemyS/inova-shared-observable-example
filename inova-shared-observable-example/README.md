# InovaSharedObservableExample

Dieses Projekt zeigt die Fallstricke beim mehrfachen Subscribe von Observables.


## Szenario und Problematik

Wird mit Subscriptions (auch impliziten durch die Async-Pipe) nicht vorsichtig umgegangen,
dann können Netzwerk-Operationen und Side-Effects von Observables vervielfacht ausgeführt werden.

Das Beispiel unter http://localhost:4200/multiple-subscriptions zeigt diese Probleme:
* Netzwerk-Call wird 8 mal ausgeführt, statt nur einmal wie erwartet und erwünscht!
* Konsolen-Logs werden als Side-Effect mehrfach geschrieben, anstatt nur einmal pro Observable!


## Lösung

* Mit Observables:
http://localhost:4200/multiple-subscriptions-solution

* Mit BehaviorSubjects:
http://localhost:4200/multiple-subscriptions-subject-solution
(immer noch mehrere vervielfachte Side-Effect-Aufrufe)
