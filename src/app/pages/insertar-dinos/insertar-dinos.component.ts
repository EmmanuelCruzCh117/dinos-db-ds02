import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DinoService } from 'src/app/services/dino.service';

@Component({
  selector: 'app-insertar-dinos',
  templateUrl: './insertar-dinos.component.html',
  styleUrls: ['./insertar-dinos.component.css']
})
export class InsertarDinosComponent implements OnInit {

  //propiedades
  enviado = false;
  tiposDinosaurio: any = ['Carvinovoro', 'Herbivoro', 'Omnivoro', 'Piscivoro']
  generosDinosaurio: any = ['Tiranosauridae', 'Spinosauridae', 'Abelisauridae', 'Ceratopsidae', 'Carcharodontosauridae']
  insertarForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private dinoService: DinoService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm(){
    this.insertarForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      tamanio: ['', 
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      peso: ['', 
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      img: ['', [Validators.required]],
    });
  }

  //método para seleccionar un tipo con un select
  actualizarTipoDino(d){
    this.insertarForm.get('tipo').setValue(d, {
      onlySelf: true,
    });
  }

  //método para seleccionar un genero con un select
  actualizarGeneroDino(d){
    this.insertarForm.get('genero').setValue(d, {
      onlySelf: true,
    });
  }

  //getter para acceder a los controles del formulario
  get myForm(){
    return this.insertarForm.controls
  }

  //método que se ejecuta cuanndo se envia el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.insertarForm.valid){
      return false;
    }else{
      return this.dinoService.agregarDino(this.insertarForm.value).subscribe({
        complete: () => {
          console.log('Dinosaurio agregado correctamente'),
          this.ngZone.run(() => this.router.navigateByUrl('/listar-dinos'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
