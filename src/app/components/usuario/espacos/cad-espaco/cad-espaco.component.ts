import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-cad-espaco',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatBadgeModule
  ],
  templateUrl: './cad-espaco.component.html',
  styleUrl: './cad-espaco.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadEspacoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
  private _formBuilder = inject(FormBuilder);

  alocacao = this._formBuilder.group({
    data: ['', Validators.required],
  });
  evento = this._formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    // capa: ['', Validators.required]
  });
  isLinear = false;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

}
