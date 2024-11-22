import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cad-espaco',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,    
  ],
  templateUrl: './cad-espaco.component.html',
  styleUrl: './cad-espaco.component.css'
})
export class CadEspacoComponent {
}
