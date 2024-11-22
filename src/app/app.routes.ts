import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContaComponent } from './components/usuario/conta/conta.component';
import { EventosComponent } from './components/usuario/eventos/eventos.component';
import { MeusEspacosComponent } from './components/usuario/meus-espacos/meus-espacos.component';
import { MeusEventosComponent } from './components/usuario/meus-eventos/meus-eventos.component';
import { MeuPerfilComponent } from './components/usuario/meu-perfil/meu-perfil.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { LoginComponent } from './components/login/login.component';
import { EspacosComponent } from './components/usuario/espacos/espacos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'cadastre-se', component: CadastroComponent },
  { path: 'conta', component: ContaComponent,
    children: [
      { path: 'meu-perfil', component: MeuPerfilComponent },
      { path: 'meus-espacos', component: MeusEspacosComponent },
      { path: 'meus-eventos', component: MeusEventosComponent },
    ]
   },
  { path: 'eventos', component: EventosComponent },
  { path: 'espacos', component: EspacosComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];
