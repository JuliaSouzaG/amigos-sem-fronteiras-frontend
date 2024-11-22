import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEspacoComponent } from './edit-espaco.component';

describe('EditEspacoComponent', () => {
  let component: EditEspacoComponent;
  let fixture: ComponentFixture<EditEspacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEspacoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEspacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
