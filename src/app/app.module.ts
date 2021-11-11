import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiraPaginaComponent } from './components/primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './components/segunda-pagina/segunda-pagina.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { TerceiraPaginaComponent } from './components/terceira-pagina/terceira-pagina.component'
import { SwApiService } from './services/sw-api.service';
import { LoadScreenService } from './services/load-screen/load-screen.service';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent,
    SegundaPaginaComponent,
    LoadingScreenComponent,
    TerceiraPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [SwApiService, LoadScreenService, PrimeiraPaginaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
