import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  dateToday!: string;
  name !: string;

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.name = "heet patel";
  }

}
