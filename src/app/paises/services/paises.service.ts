import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  private apiUrl:string = "https://restcountries.com/v3.1";
  private apiUrlRegionalBloc = "https://restcountries.com/v2";

  buscarPais(termino: string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }


  buscarCapital(termino: string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }


  getPaisPorCodigo(id: string): Observable<Country> {
    
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  
  buscarPorRegion(termino: string): Observable<Country[]> {
    
    const url = `${this.apiUrlRegionalBloc}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url);
  }

}
