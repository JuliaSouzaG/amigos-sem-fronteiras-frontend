import { Routes } from '@angular/router';
import { CadastroPessoaComponent } from './components/cadastros/cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponent } from './components/home/home.component';
import { EscolhaUsuarioComponent } from './components/cadastros/escolha-usuario/escolha-usuario.component';
import { CadastroInstituicaoComponent } from './components/cadastros/cadastro-instituicao/cadastro-instituicao.component';
import { ContaComponent } from './components/usuario/conta/conta.component';
import { EventosComponent } from './components/usuario/eventos/eventos.component';
import { MeusEspacosComponent } from './components/usuario/meus-espacos/meus-espacos.component';
import { MeusEventosComponent } from './components/usuario/meus-eventos/meus-eventos.component';
import { MeuPerfilComponent } from './components/usuario/meu-perfil/meu-perfil.component';

export const routes: Routes = [
  { path: 'cadastro-pessoa', component: CadastroPessoaComponent },
  { path: 'escolha-usuario', component: EscolhaUsuarioComponent },
  { path: 'cadastro-instituicao', component: CadastroInstituicaoComponent },
  { path: 'conta', component: ContaComponent,
    children: [
      { path: 'meu-perfil', component: MeuPerfilComponent },
      { path: 'meus-espacos', component: MeusEspacosComponent },
      { path: 'meus-eventos', component: MeusEventosComponent },
    ]
   },
  { path: 'eventos', component: EventosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];
