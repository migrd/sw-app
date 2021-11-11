import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrimeiraPaginaComponent } from './components/primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './components/segunda-pagina/segunda-pagina.component';
import { TerceiraPaginaComponent } from './components/terceira-pagina/terceira-pagina.component';
import { EmailPermissaoGuard } from './email-permissao.guard';

const routes: Routes = [
  { path: 'primeira-pagina', component: PrimeiraPaginaComponent },
  { path: 'segunda-pagina', component: SegundaPaginaComponent, canActivate: [EmailPermissaoGuard], },
  { path: 'terceira-pagina', component: TerceiraPaginaComponent },
  { path: '',   redirectTo: 'primeira-pagina', pathMatch: 'full' },
  { path: '**', component: PrimeiraPaginaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
