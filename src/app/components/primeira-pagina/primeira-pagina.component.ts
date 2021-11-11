import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'primeira-pagina',
  templateUrl: './primeira-pagina.component.html',
  styleUrls: ['./primeira-pagina.component.scss']
})
export class PrimeiraPaginaComponent implements OnInit {

  permissao: boolean = false; //permissao do guard para acessar a segunda-pagina
  email = new FormControl('',Validators.compose([
    Validators.required,
    Validators.email,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]));

  constructor(private router: Router) { }

  proximaPagina(){
    //console.log(this.email);
    this.permissao = true;
    this.router.navigate(['segunda-pagina']);
  }

  ngOnInit(): void {
  }

}
