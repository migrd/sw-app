import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { PrimeiraPaginaComponent } from './components/primeira-pagina/primeira-pagina.component';

@Injectable({
  providedIn: 'root'
})
export class EmailPermissaoGuard implements CanActivate {
  private observable = new Observable(subscriber => {
    subscriber.next(this.primeiraPagina.permissao);
  });

  private permissao = !this.primeiraPagina.permissao;

  constructor(private primeiraPagina: PrimeiraPaginaComponent){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.permissao; // adicionar observable e arrumar problmema da tipagem
      
    }
}
