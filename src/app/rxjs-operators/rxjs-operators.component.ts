import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { RxjsOperatorsService } from '../rxjs-operators.service';
@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = []
  res: any;

  constructor(private rxjsOperatorsService: RxjsOperatorsService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
  ngOnInit(): void {

  }
  onClickOfOperator() {
    this.subscriptions.push(this.rxjsOperatorsService.ofOperator().subscribe((res: any) => {
      console.log(res);

    }))
  }

  onClickFromOperator() {
    this.subscriptions.push(this.rxjsOperatorsService.fromOperator().subscribe((res) => {
      console.log("From operator is beig called ", res);

    }))
  }

  onClickConcatWithOperator() {
    this.subscriptions.push(this.rxjsOperatorsService.concatWithOperator().subscribe((res) => {
      console.log("concat with operator ", res);

    }))

  }

  onClickMergeOperator() {
    this.subscriptions.push(this.rxjsOperatorsService.mergeOperator().subscribe((res) => {
      console.log("merge operator is being called", res);

    }))
  }

  onClickMapOperator() {
    this.subscriptions.push(this.rxjsOperatorsService.mapOperator().subscribe((res) => {
      console.log("map operator is being called ", res);

    }))
  }

  onClickConcatMapOperator() {
    this.subscriptions.push(this.rxjsOperatorsService.concatMap().subscribe((res) => {
      console.log("concatemap operator is being called ", res);

    }))
  }
}
