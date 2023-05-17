import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sheader',
  templateUrl: './sheader.component.html',
  styleUrls: ['./sheader.component.scss']
})
export class SheaderComponent implements OnInit {



  constructor(private messageService: MessageService) { }
  ngOnInit(): void {

  }


  sendMessage(message: any) {
    this.messageService.sendMessage(message);
  }



}
