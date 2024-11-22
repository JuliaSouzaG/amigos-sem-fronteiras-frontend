import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CadEspacoComponent } from './cad-espaco/cad-espaco.component';
import { EditEspacoComponent } from './edit-espaco/edit-espaco.component';
import { Espaco } from '../../../interface/espaco';

@Component({
  selector: 'app-meus-espacos',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    MatDialogModule,
  ],
  templateUrl: './meus-espacos.component.html',
  styleUrl: './meus-espacos.component.css'
})
export class MeusEspacosComponent {

  constructor( private dialog: MatDialog ) {}

  openCadDialog() {
    this.dialog.open(CadEspacoComponent, {
        width: '500px',
        disableClose: true,
    })
  }

  openEditDialog(espaco: any) {
    this.dialog.open(EditEspacoComponent, {
        data: {espaco: espaco},
        width: '500px',
        disableClose: true,
    })
  }

  meusEspacos: Espaco[] = [
    {
      nome: 'Laboratório de Informática',
      capacidade: 40,
      responsavel: 'Fulano da Silva'
    },
    {
      nome: 'Laboratório de Informática',
      capacidade: 15,
      responsavel: 'Beltrano Pereira'
    },
  ]
}
