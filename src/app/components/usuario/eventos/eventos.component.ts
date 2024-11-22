import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CadEventoComponent } from './cad-evento/cad-evento.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})

export class EventosComponent {

  constructor(public dialog: MatDialog) {}

  openCadDialog(e: any) {
    this.dialog.open(CadEventoComponent, {
      data: {e: e},
      width: '600px',
      disableClose: true
    });
  }

  eventos = [
    {
      nome: "Caminhada Solidária",
      descricao: "Um evento para arrecadação de alimentos e promover saúde com atividades físicas.",
      data: "10/12/2024",
      endereco: "Avenida Brasil, 1234, Centro, São Paulo - SP",
      instituicao_org: {
        nome: "Associação Mãos Amigas",
        telefone: "(11) 98765-4321"
      },
      imagem: "../../../../assets/img/eventos/caminhada-solidaria.webp"
    },
    {
      nome: "Jantar Beneficente",
      descricao: "Um jantar especial para arrecadação de fundos para crianças em situação de vulnerabilidade.",
      data: "15/12/2024",
      endereco: "Rua das Flores, 567, Vila Mariana, São Paulo - SP",
      instituicao_org: {
        nome: "Grupo Vida Feliz",
        telefone: "(11) 99988-7766"
      },
      imagem: "../../../../assets/img/eventos/jantar-beneficente.jpeg"
    },
    {
      nome: "Bazar do Bem",
      descricao: "Venda de produtos doados para arrecadação de fundos para projetos sociais.",
      data: "20/12/2024",
      endereco: "Praça Central, 890, Centro, Rio de Janeiro - RJ",
      instituicao_org: {
        nome: "Associação Esperança",
        telefone: "(21) 98777-6655"
      },
      imagem: "../../../../assets/img/eventos/bazar-do-bem.jpeg"
    },
    {
      nome: "Natal Solidário",
      descricao: "Distribuição de cestas básicas e brinquedos para famílias carentes.",
      data: "24/12/2024",
      endereco: "Rua do Amor, 12, Centro, Salvador - BA",
      instituicao_org: {
        nome: "ONG Abraço Fraterno",
        telefone: "(71) 91234-5678"
      },
      imagem: "../../../../assets/img/eventos/natal-solidario.jpeg"
    },
    {
      nome: "Show da Solidariedade",
      descricao: "Apresentação musical para arrecadação de fundos para casas de acolhimento.",
      data: "10/01/2025",
      endereco: "Auditório Estrela, Rua Luz, 456, Belo Horizonte - MG",
      instituicao_org: {
        nome: "Fundação Nova Esperança",
        telefone: "(31) 99888-6655"
      },
      imagem: "../../../../assets/img/eventos/show-solidariedade.jpeg"
    },
    {
      nome: "Corrida pela Vida",
      descricao: "Corrida beneficente para apoiar tratamentos de saúde de crianças com câncer.",
      data: "20/01/2025",
      endereco: "Parque Verde, Avenida Natureza, 333, Curitiba - PR",
      instituicao_org: {
        nome: "Instituto Saúde e Vida",
        telefone: "(41) 99123-4567"
      },
      imagem: "../../../../assets/img/eventos/corrida-beneficente.jpeg"
    },
    {
      nome: "Feira da Solidariedade",
      descricao: "Uma feira com stands de artesanato e gastronomia para arrecadação de fundos para comunidades carentes.",
      data: "05/02/2025",
      endereco: "Rua Central, 789, Centro, Porto Alegre - RS",
      instituicao_org: {
        nome: "Projeto Mãos Unidas",
        telefone: "(51) 99876-5432"
      },
      imagem: "../../../../assets/img/eventos/feira.webp"
    },
    {
      nome: "Cinema ao Ar Livre",
      descricao: "Exibição de filmes ao ar livre com ingresso solidário para ajudar instituições locais.",
      data: "10/03/2025",
      endereco: "Parque do Sol, Avenida Principal, 555, Fortaleza - CE",
      instituicao_org: {
        nome: "Fundação Sorriso",
        telefone: "(85) 91234-6789"
      },
      imagem: "../../../../assets/img/eventos/cinema-ao-ar-livre.webp"
    }
  ];

}
