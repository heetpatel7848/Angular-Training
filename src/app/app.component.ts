import { Component, NgModule, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  title = 'book-shop'

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   observer.next('1');
  //   observer.next('2');
  //   observer.next('3');
  //   observer.next('4');
  //   observer.next('5');
  //   observer.next('6');
  // });
  // ngOnInit(): void {
  //   this.myObservable.subscribe((val) => {
  //     console.log(val);
  //   });
  // }
}
