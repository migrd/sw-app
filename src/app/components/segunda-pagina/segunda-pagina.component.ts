import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormControl, Validator, Validators } from "@angular/forms";

import { SwApiService } from './../../services/sw-api.service';
import { LoadScreenService } from './../../services/load-screen/load-screen.service';

@Component({
  selector: 'segunda-pagina',
  templateUrl: './segunda-pagina.component.html',
  styleUrls: ['./segunda-pagina.component.scss'],
  providers:  [ SwApiService ]
})
export class SegundaPaginaComponent implements OnInit {

  nome = new FormControl('',Validators.compose([
    Validators.required,
  ]));

  constructor(private _swApi: SwApiService, private router: Router, private _loadService: LoadScreenService) { }

  private temp: any = [];

  swApi(){
    return this._swApi;
  }
  
  saveData(){
    this.swApi().setData('data', this.swApi().personagemData);
    //console.log("1", this.swApi().personagemDisplay[0])
    //this.swApi().setData('data', this.swApi().personagemDisplay);
    
    //console.warn("personagemDisplay",this.swApi().personagemDisplay)
    //console.log("getData",this.swApi().getData('data'))
  }



  load(){
    return this._loadService;
  }
  startLoading(){
    return this.load().startLoading();
  }
  stopLoading(){
    return this.load().stopLoading();
  }

  navegaProximaRota(){
    if(this.swApi().personagemData){
      this.router.navigate(['terceira-pagina']);
    }else{ return null;}
  }

  searchPersonagem(nome: string){
    this.swApi().getPersonagem(nome).subscribe((result) => {
      this.startLoading();

      //console.log(result.results)
      this.swApi().personagemData = result.results[0];
      //this.swApi().personagemDisplay[0].nome = result.results[0].name;


      this.saveData();
      //console.log("2getData",this._swApi.getData('data'));
      
      this.navegaProximaRota();

      this.stopLoading();
    })

  }

  ngOnInit(): void {
    //console.warn(this.swApi().personagemData)
  }

}
