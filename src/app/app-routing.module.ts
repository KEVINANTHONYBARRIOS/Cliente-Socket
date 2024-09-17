import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chats/chats.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Pantalla de login
  { path: 'chat', component: ChatComponent }, // Componente de chat
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}