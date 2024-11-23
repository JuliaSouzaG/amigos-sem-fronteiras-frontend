import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    MatTabsModule,
    RouterLink,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatCheckboxModule    
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  providers: [provideNgxMask()]
})
export class CadastroComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  formPessoa!: FormGroup;
  formInstituicao!: FormGroup;

  ngOnInit(): void {

    this.formInstituicao = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      telefone: ['', Validators.required],
      observacao: ['', Validators.required],
      termoDeUso: ['', Validators.required]
    })

    this.formPessoa = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      celular: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      dt_nascimento: ['', Validators.required],
      genero: ['', Validators.required],
      termoDeUso: ['', Validators.required]
    })
  }

  onSubmitPessoa() {
    if(this.formPessoa.valid) {
      alert('Formulário preenchido corretamente');
      this.formPessoa.reset();
    } 
  }

  onSubmitInstituicao() {
    if(this.formInstituicao.valid) {
      alert('Formulário preenchido corretamente');
      this.formInstituicao.reset();
    } 
  }
}
