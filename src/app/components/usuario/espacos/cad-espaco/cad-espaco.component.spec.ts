import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEspacoComponent } from './cad-espaco.component';

describe('CadEspacoComponent', () => {
  let component: CadEspacoComponent;
  let fixture: ComponentFixture<CadEspacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadEspacoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadEspacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
