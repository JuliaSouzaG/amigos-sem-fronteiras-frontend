import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})

export class EventosComponent {

  eventos = [
    {
      nome: "Doação",
      data: "16/12/2024",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      },
      local: {
        rua: "tal tal",
        bairro: "Chapada",
      }
    },
    {
      nome: "Distribuição de sopa",
      data: "16/07/2024",
      instituicao_org: {
        nome: "Senac",
        telefone: "92 982402547"
      },
      local: {
        rua: "tal tal",
        bairro: "Chapada",
      }
    }
  ]

}
