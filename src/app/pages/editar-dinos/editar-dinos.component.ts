import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dino } from 'src/app/models/dino';
import { DinoService } from 'src/app/services/dino.service';

@Component({
  selector: 'app-editar-dinos',
  templateUrl: './editar-dinos.component.html',
  styleUrls: ['./editar-dinos.component.css']
})
export class EditarDinosComponent implements OnInit {

  //propiedades
  enviado = false;
  tipoDino: any = ['Carvinovoro', 'Herbivoro', 'Omnivoro', 'Piscivoro']
  generoDino: any = ['Tiranosauridae', 'Spinosauridae', 'Abelisauridae', 'Ceratopsidae', 'Carcharodontosauridae']
  editarForm: FormGroup;
  dinoData: Dino[];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private dinoService: DinoService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mainForm();
    let id = this.actRouter.snapshot.paramMap.get('id');
    this.getDino(id);
    this.editarForm = this.formBuilder.group({
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

  mainForm(){
    this.editarForm = this.formBuilder.group({
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
    this.editarForm.get('tipo').setValue(d, {
      onlySelf: true,
    });
  }

  //método para seleccionar un genero con un select
  actualizarGeneroDino(d){
    this.editarForm.get('genero').setValue(d, {
      onlySelf: true,
    });
  }

  //getter para acceder a los controles del formulario
  get myForm(){
    return this.editarForm.controls
  }

  //método para buscar al empleado que vamos a modificar
  getDino(id){
    this.dinoService.getDino(id).subscribe((data) => {
      this.editarForm.setValue({
        nombre: data['nombre'],
        tipo: data['tipo'],
        genero: data['genero'],
        tamanio: data['tamanio'],
        peso: data['peso'],
        img: data['img'],
      });
    });
  }

  //método que se ejecuta cuanndo se envia el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.editarForm.valid){
      return false;
    }else{
      if(window.confirm('¿Estás seguro de editar el dinosaurio?')){
        let id = this.actRouter.snapshot.paramMap.get('id');
        this.dinoService.updateDino(id, this.editarForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/listar-dinos');
            console.log('El dinosaurio se actualizó correctamente');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }

}
