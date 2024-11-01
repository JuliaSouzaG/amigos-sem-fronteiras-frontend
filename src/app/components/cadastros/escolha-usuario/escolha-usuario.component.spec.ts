import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaUsuarioComponent } from './escolha-usuario.component';

describe('EscolhaUsuarioComponent', () => {
  let component: EscolhaUsuarioComponent;
  let fixture: ComponentFixture<EscolhaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolhaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
