import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Evento } from '../../../interface/evento';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-meus-eventos',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './meus-eventos.component.html',
  styleUrl: './meus-eventos.component.css'
})
export class MeusEventosComponent {

  constructor (private dialog: MatDialog) {}

  openCadDialog() {
    
  }

  openEditDialog(evento: Evento) {
    
  }

  meusEventos: Evento[] = [
    {
      nome: "Doação",
      data: "16/12/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      alocacao: {
          org: {
            nome: "Senac",
            telefone: "92 982402547"
        }, 
          local: {
            nome: "Laboratório de Informática",
            responsavel: "Luiza",
            capacidade: 10,
        }
      }
    },
    {
      nome: "Doação",
      data: "16/12/2024",
      endereco: "Rua tal tal, Bairo tal. Nº0",
      alocacao: {
          org: {
            nome: "Senac",
            telefone: "92 982402547"
        }, 
          local: {
            nome: "Laboratório de Informática",
            responsavel: "Luiza",
            capacidade: 10,
        }
      }
    },
  ]
}
