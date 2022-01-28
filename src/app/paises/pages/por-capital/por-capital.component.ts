import { Component} from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisesService: PaisesService ) { }

  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    
    this.paisesService.buscarCapital(this.termino)
    .subscribe( (resp) =>{
      this.paises = resp;
      console.log(resp);
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })

  }



}
