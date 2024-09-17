import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.development';
import { TopComponent } from './components/top/top.component';
import { ChatComponent } from './components/chats/chats.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

// Configuración de Socket.IO
const config: SocketIoConfig = { url: environment.wsSockets, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
