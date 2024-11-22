import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CadEspacoComponent } from './cad-espaco/cad-espaco.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-espacos',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule, 
    MatButtonModule, 
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
  ],
  templateUrl: './espacos.component.html',
  styleUrl: './espacos.component.css',
})
export class EspacosComponent {

  constructor(public dialog: MatDialog) {}

  openCadDialog(e: any) {
    this.dialog.open(CadEspacoComponent, {
      data: {e: e},
      width: '600px',
      disableClose: true
    });
  }
  
  espacos = [
    {
      nome: 'Laboratório de Informática',
      capacidade: '40 pessoas',
      org: {
        nome: 'Faculdade de Tecnologia Senac',
        endereco: 'Rua 10 de julho, Centro',
      },
    },
    {
      nome: 'Laboratório de Informática',
      capacidade: '40 pessoas',
      org: {
        nome: 'Faculdade de Tecnologia Senac',
        endereco: 'Rua 10 de julho, Centro',
      },
    },
    {
      nome: 'Laboratório de Informática',
      capacidade: '40 pessoas',
      org: {
        nome: 'Faculdade de Tecnologia Senac',
        endereco: 'Rua 10 de julho, Centro',
      },
    },
    {
      nome: 'Laboratório de Informática',
      capacidade: '40 pessoas',
      org: {
        nome: 'Faculdade de Tecnologia Senac',
        endereco: 'Rua 10 de julho, Centro',
      },
    }
  ];
}
