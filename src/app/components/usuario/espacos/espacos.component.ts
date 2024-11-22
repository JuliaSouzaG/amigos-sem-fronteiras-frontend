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
      capacidade: 40,
      org: {
        nome: 'Faculdade de Tecnologia Senac',
        endereco: 'Rua 10 de julho, Centro',
      },
      image: '../../../../assets/img/fatese-centro.jpg'
    },
    {
      nome: 'Ginásio poliesportivo',
      capacidade: 200,
      org: {
        nome: 'Escola Municipal Charles Garcia',
        endereco: 'R. Alfredo Monteiro Lima, 66-124 - Santa Rita de Cassia',
      },
      image: '../../../../assets/img/ginasio-charles-garcia.jpeg'
    },
    {
      nome: 'Laboratório Maker',
      capacidade: 15,
      org: {
        nome: 'Instituto Bejamin Constant',
        endereco: 'Av. Ramos Ferreira, 991 - Centro, Manaus',
      },
      image: '../../../../assets/img/espaco-maker.jpg'
    },
    {
      nome: 'Laboratório Ciências',
      capacidade: 30,
      org: {
        nome: 'Colégio La Salle',
        endereco: 'Av. Central, Área Especial 11 Núcleo Bandeirante - DF',
      },
      image: '../../../../assets/img/laboratorio-lasalle.jfif'
    }
  ];
}
