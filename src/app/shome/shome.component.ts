import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.scss']
})
export class ShomeComponent implements OnInit {
  message !: string;


  constructor(private messageService: MessageService) { }
  ngOnInit(): void {
    this.messageService.receievedMessage().subscribe((res: string) => {
      this.message = res;
    })
  }





}
