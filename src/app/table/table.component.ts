import { Component, NgModule, OnInit } from '@angular/core';
import { Ng2SearchPipe } from 'ng2-search-filter';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor() { }

  searchText: any;

  heroes = [
    { id: 1, name: 'heet', favplace: 'usa' },
    { id: 2, name: 'harsh', favplace: 'canada' },
    { id: 3, name: 'yash', favplace: 'london' },
    { id: 4, name: 'jay', favplace: 'nyc' },
    { id: 5, name: 'himanshu', favplace: 'dubai' },
    { id: 6, name: 'dhruv', favplace: 'ladakh' }

  ]

}
