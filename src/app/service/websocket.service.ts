import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socketStatus = new BehaviorSubject<boolean>(false);

  constructor(public socket: Socket) {  // Cambia 'Socket' por 'socket'
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Cliente conectado');
      this.socketStatus.next(true);
    });

    this.socket.on('disconnect', () => {
      console.log('Cliente desconectado');
      this.socketStatus.next(false);
    });
  }

  emit(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  getStatus() {
    return this.socketStatus.asObservable();
  }
}
