import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Importar siempre que se utilicen componentes que posean animaciones aun que no se utilicen

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localEs from '@angular/common/locales/es-NI';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'
registerLocaleData( localEs );
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouteModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-NI' } //Cambia de manera global el idioma de las fechas, las monedas, etc.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
