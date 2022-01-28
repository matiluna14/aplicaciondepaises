import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  constructor(private paisesService: PaisesService) { }

  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    
    this.paisesService.buscarPais(this.termino)
    .subscribe( (resp) =>{
      this.paises = resp;
      console.log(resp);
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })

  }


  sugerencias(termino: string){
    this.hayError = false;
    //to do CREAR SUGERENCIAS
  }

}
