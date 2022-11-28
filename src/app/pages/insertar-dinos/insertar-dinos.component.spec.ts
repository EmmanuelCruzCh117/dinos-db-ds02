import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDinosComponent } from './insertar-dinos.component';

describe('InsertarDinosComponent', () => {
  let component: InsertarDinosComponent;
  let fixture: ComponentFixture<InsertarDinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarDinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarDinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
