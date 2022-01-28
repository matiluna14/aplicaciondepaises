import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country, Name } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais: string = "";

  constructor(private activateRoute: ActivatedRoute,
              private paisesService: PaisesService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .subscribe( ({id}) => {
      console.log(id);
    
      this.paisesService.getPaisPorCodigo(id)
      .subscribe( pais => {
        this.pais = pais.name.common;
        console.log(pais);
        
      })
    })
   


  }

}
