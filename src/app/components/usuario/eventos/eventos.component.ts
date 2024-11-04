import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})

export class EventosComponent {

  eventos = [
    {
      nome: "Doação",
      data: "16/12/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      }
    }
  ]

}
