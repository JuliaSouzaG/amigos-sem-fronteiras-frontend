import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEspacosComponent } from './meus-espacos.component';

describe('MeusEspacosComponent', () => {
  let component: MeusEspacosComponent;
  let fixture: ComponentFixture<MeusEspacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusEspacosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeusEspacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
