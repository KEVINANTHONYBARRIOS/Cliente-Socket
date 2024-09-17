import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent implements OnInit {
  public isOnline: boolean = false;
  constructor(public wsService:WebsocketService){}

   ngOnInit(): void {
     this.wsService.getStatus().subscribe((status)=>{
      this.isOnline = status; 
     });
   }
}
