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
