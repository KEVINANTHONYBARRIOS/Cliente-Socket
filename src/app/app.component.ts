import { Component } from '@angular/core';
import { WebsocketService } from './service/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Corrección aquí
})
export class AppComponent {
  public isOnline: boolean = false;
  title = 'ClienteSockPrueba2';
  
  constructor(public webSocket: WebsocketService) {
    this.webSocket.getStatus().subscribe(status => {
      this.isOnline = status;
    });
  }
}
