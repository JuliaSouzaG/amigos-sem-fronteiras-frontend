import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-espaco',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './edit-espaco.component.html',
  styleUrl: './edit-espaco.component.css'
})
export class EditEspacoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
