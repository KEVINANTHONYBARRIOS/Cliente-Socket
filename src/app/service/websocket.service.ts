import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socketStatus = new BehaviorSubject<boolean>(false);
  constructor(public Socket: Socket) {
    this.checkStatus();
  }
  checkStatus() {
    this.Socket.on('connect', () => {
      console.log('Cliente conectado');
      this.socketStatus.next(true);
    });
    this.Socket.on('disconnect', () => {
      console.log('Cliente conectado');
      this.socketStatus.next(false);
    });
  }
  emit(evento: string, payload?: any, callback?: Function) {
    this.Socket.emit(evento, payload, callback);
  }
  listen(evento: string) {
    return this.Socket.fromEvent(evento);
  }
  getStatus() {
    return this.socketStatus.asObservable();
  }
}