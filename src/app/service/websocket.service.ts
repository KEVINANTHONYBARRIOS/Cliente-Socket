import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socketStatus = new BehaviorSubject<boolean>(false);

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  private checkStatus() {
    this.socket.on('connect', () => {
      console.log('Cliente conectado');
      this.socketStatus.next(true);
    });

    this.socket.on('disconnect', () => {
      console.log('Cliente desconectado');
      this.socketStatus.next(false);
    });
  }

  emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  getStatus() {
    return this.socketStatus.asObservable();
  }
}
