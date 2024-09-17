import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketService) {}
  enviarMensaje(mensaje: string, nombreUsuario: string) {
    const payload = {
      de: nombreUsuario,
      cuerpo: mensaje,
    };
    this.wsService.emit('mensaje', payload);
  }
  getMessages() {
    return this.wsService.listen('mensaje-nuevo');
  }
}