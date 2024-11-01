import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastro-instituicao',
  standalone: true,
  imports: [
    RouterLink,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './cadastro-instituicao.component.html',
  styleUrl: './cadastro-instituicao.component.css',
  providers: [provideNgxMask()]
})
export class CadastroInstituicaoComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      telefone: ['', Validators.required],
      observacao: ['', Validators.required],
    })
  }

  onSubmit() {
    if(this.form.valid) {
      alert('Formulário preenchido corretamente');
      this.form.reset();
    } 
  }
}
