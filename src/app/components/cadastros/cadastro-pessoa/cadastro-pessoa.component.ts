import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [
    RouterLink,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css',
  providers: [provideNgxMask()]
})
export class CadastroPessoaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      celular: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      dt_nascimento: ['', Validators.required],
      genero: ['', Validators.required],
    })
  }

  onSubmit() {
    if(this.form.valid) {
      alert('Formulário preenchido corretamente');
      this.form.reset();
    } 
  }

}
