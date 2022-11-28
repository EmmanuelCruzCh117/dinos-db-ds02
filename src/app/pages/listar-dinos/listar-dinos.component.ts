import { Component, OnInit } from '@angular/core';
import { DinoService } from 'src/app/services/dino.service';

@Component({
  selector: 'app-listar-dinos',
  templateUrl: './listar-dinos.component.html',
  styleUrls: ['./listar-dinos.component.css']
})
export class ListarDinosComponent implements OnInit {

  Dinos: any = [];

  constructor(private dinoService: DinoService) {
    this.getDinos();
  }
  ngOnInit(): void {
  }

  //Método para obtener todos los dinos
  getDinos() {
    this.dinoService.getDinos().subscribe((data) => {
      this.Dinos = data;
    })
  }

  eliminarDino(dino, index) {
    if (window.confirm('¿Estás seguro de lo que deseas borrar?')) {
      this.dinoService.deleteDino(dino._id).subscribe((data) => {
        this.Dinos.splice(index, 1);
      })
    }
  }
}
