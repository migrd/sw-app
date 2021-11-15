import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SwApiService } from './../../services/sw-api.service';

@Component({
  selector: 'app-terceira-pagina',
  templateUrl: './terceira-pagina.component.html',
  styleUrls: ['./terceira-pagina.component.scss']
})
export class TerceiraPaginaComponent implements OnInit {

  constructor(private _swApi: SwApiService, private router: Router) { }

  swApi(){
    return this._swApi;
  }
  getData(){
    //this.swApi().personagemDisplay[0] = this.swApi().getData('data');
    //return this.swApi().personagemDisplay;
    this.swApi().personagemData[0] = this.swApi().getData('data');
    return this.swApi().personagemData;
  }

  getProp(data: string){
    this.swApi().personagemDisplay[0] = this.swApi().getData(data);
    return this.swApi().personagemDisplay[0];
  }

  display(){
    return this.swApi().personagemDisplay;
  }


  getFilme(filme){
    let len = this.swApi().personagemDisplay[0].filmes.length;
    this.swApi().personagemDisplay[0].filmes.splice(0, len);

    this.swApi().getFilmes(filme).subscribe((result) => {
      this.swApi().personagemDisplay[0].filmes.unshift(result.title);
      //console.warn(this.swApi().personagemDisplay[0])
    })
  }
  getNave(nave){
    let len = this.swApi().personagemDisplay[0].naves.length;
    this.swApi().personagemDisplay[0].filmes.splice(0, len);

    this.swApi().getNave(nave).subscribe((result) => {
      this.swApi().personagemDisplay[0].naves.unshift(result.name);
      //console.warn(this.swApi().personagemDisplay[0])
    })
  }
  getVeiculo(veiculo){
    this.swApi().getVeiculos(veiculo).subscribe((result) => {
      this.swApi().personagemDisplay[0].veiculo = result.name;
      //console.warn(this.swApi().personagemDisplay[0])
    })
  }
  getEspecie(especie){
    this.swApi().getEspecie(especie).subscribe((result) => {
      this.swApi().personagemDisplay[0].especie = result.name;
    })
  }
  getPlaneta(planeta){
    this.swApi().getPlaneta(planeta).subscribe((result) => {
      this.swApi().personagemDisplay.planeta = result.name;
    })
  }

  pesquisarNovamente(){
    this.router.navigate(['segunda-pagina']);
  }


  ngOnInit(): void {
    console.log("3 getData",this.getData());
    //console.warn(this.swApi().personagemDisplay[0]);

    this.swApi().personagemDisplay[0].nome = this.swApi().personagemData[0].name;

    
    this.swApi().personagemData[0].films.forEach((element) => { //pega os filmes do personagem e armazena em personagemFilme
      this.getFilme(element);
      //console.warn(this.swApi().personagemDisplay.filmes)
    });
    
    this.swApi().personagemData[0].starships.forEach((element) => { //pega as naves do personagem e armazena em personagemNave
      this.getNave(element);
    });
    
    if(this.swApi().personagemData[0].vehicles.length >= 1){
      this.swApi().personagemData[0].vehicles.forEach((element) => { //pega os veiculos do personagem e armazena em personagemVeiculos
        this.getVeiculo(element);
      });
    }else{ return null }

    this.getEspecie(this.swApi().personagemData[0].species);

    this.getPlaneta(this.swApi().personagemData[0].homeworld);

    console.log("certo",this.swApi().personagemDisplay[0])



  }

}
