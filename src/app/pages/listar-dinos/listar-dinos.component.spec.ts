import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDinosComponent } from './listar-dinos.component';

describe('ListarDinosComponent', () => {
  let component: ListarDinosComponent;
  let fixture: ComponentFixture<ListarDinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
