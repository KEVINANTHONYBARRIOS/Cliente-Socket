import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
})
export class ChatComponent implements OnInit, OnDestroy {
  mensajes: any[] = [];
  texto = '';
  mensajesSubscription!: Subscription;
  nombreUsuario: string = '';
  constructor(public chatService: ChatService) {}
  enviar() {
    this.chatService.enviarMensaje(this.texto, this.nombreUsuario);
    this.texto = '';
  }
  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || 'Anonimo';
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        console.log(msg);
        this.mensajes.push(msg);
      });
  }
  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }
}