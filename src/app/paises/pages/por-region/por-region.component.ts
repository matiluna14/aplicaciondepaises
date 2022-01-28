import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  constructor(private paisesService: PaisesService) { }

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = "";
  paises: Country[] = [];
  hayError: boolean = false;


  ngOnInit(): void {
  }

  activarRegion(regionPresionada: string){
    this.regionActiva = regionPresionada;
  }

  getClassCSS(regionPresionada: string){
    return (regionPresionada == this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  buscarPaisesPorRegion(){
    this.paisesService.buscarPorRegion(this.regionActiva)
    .subscribe( (resp) =>{
      this.paises = resp;
      console.log(resp);
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })





    //console.log(this.paisesService.buscarPorRegion(this.regionActiva));
  }

}
