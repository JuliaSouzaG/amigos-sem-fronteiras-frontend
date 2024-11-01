import { Routes } from '@angular/router';
import { CadastroPessoaComponent } from './components/cadastros/cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponent } from './components/home/home.component';
import { EscolhaUsuarioComponent } from './components/cadastros/escolha-usuario/escolha-usuario.component';
import { CadastroInstituicaoComponent } from './components/cadastros/cadastro-instituicao/cadastro-instituicao.component';
import { ContaComponent } from './components/usuario/conta/conta.component';
import { EventosComponent } from './components/usuario/eventos/eventos.component';

export const routes: Routes = [
  { path: 'cadastro-pessoa', component: CadastroPessoaComponent },
  { path: 'escolha-usuario', component: EscolhaUsuarioComponent },
  { path: 'cadastro-instituicao', component: CadastroInstituicaoComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];
