import { LoadScreenService } from './load-screen/load-screen.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Router} from "@angular/router";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwApiService{

  

  personagemData: any = [];

  personagemFilme: any = [];
  personagemNave: any = [];
  personagemVeiculo: any = [];
  personagemEspecie: any = [];
  personagemPlaneta: any = [];


  personagemDisplay: any = [{
    nome: "N/A",
    filmes: [],
    naves: [],
    veiculos: [],
    especie: "N/A",
    planeta: "N/A"
  }];
  
  private _swApiUrlPeople: string = "https://swapi.dev/api/people/?search=";

  constructor(private _http: HttpClient, private router: Router, private _loadScreen: LoadScreenService) { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getPersonagem(personagemNome: string): Observable<any>{
    this._loadScreen.startLoading();
    return this._http.get<any>(this._swApiUrlPeople + personagemNome);
  }
  getFilmes(filme: string){
    return this._http.get<any>(filme);
  }
  getNave(nave: string){
    return this._http.get<any>(nave);
  }
  getVeiculos(veiculo){
    return this._http.get<any>(veiculo);
  }
  getEspecie(especie){
    return this._http.get<any>(especie);
  }
  getPlaneta(planeta){
    return this._http.get<any>(planeta);
  }

}
