import { Injectable } from '@angular/core';
import { Observable, concatWith, from, interval, merge, mergeWith, of, map, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RxjsOperatorsService {

  constructor(private http: HttpClient) { }


  ofOperator() {
    let numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    return numbers$;
  }

  fromOperator(): Observable<number> {
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let number$ = from(numbersArray);
    return number$;
  }

  concatWithOperator(): Observable<number> {
    let source1$ = of(1, 3, 5, 7, 9);
    let source2$ = of(2, 4, 6, 8, 10);

    let concated$ = source1$.pipe(concatWith(source2$));
    return concated$;
  }

  mergeOperator(): Observable<number> {
    const source1$ = interval(1000);
    const source2$ = interval(2000);
    let merge$ = merge(source1$, source2$);
    return merge$;
  }

  mapOperator(): Observable<number> {
    let number$ = of(1, 2, 3, 4, 5);
    let mapped$ = number$.pipe(map((x) => x * 10));
    return mapped$;
  }

  concatMap(): Observable<string> {
    const sourceObservable$ = of(1, 2, 3, 4);
    const innerObservable$ = of('H', 'E', 'E', 'T');

    const concatMapped$ = sourceObservable$.pipe(
      concatMap((value) => {
        console.log('Source value :- ', value);
        console.log('Starting inner observable');
        return innerObservable$;
      })
    );

    return concatMapped$;
  }




}
