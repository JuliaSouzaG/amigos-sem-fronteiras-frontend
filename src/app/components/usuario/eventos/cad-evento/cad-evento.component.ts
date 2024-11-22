import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-cad-evento',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatBadgeModule],
  templateUrl: './cad-evento.component.html',
  styleUrl: './cad-evento.component.css'
})
export class CadEventoComponent {
 constructor (@Inject(MAT_DIALOG_DATA) public data: any) {}

  private _formBuilder = inject(FormBuilder);

  participacao = this._formBuilder.group({
    tipoParticipacao: ['', Validators.required],
  });
  evento = this._formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
  });
  isLinear = false;
}
