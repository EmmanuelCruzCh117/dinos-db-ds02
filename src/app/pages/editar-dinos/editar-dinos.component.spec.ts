import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDinosComponent } from './editar-dinos.component';

describe('EditarDinosComponent', () => {
  let component: EditarDinosComponent;
  let fixture: ComponentFixture<EditarDinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
