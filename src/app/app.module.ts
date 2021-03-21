import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { GoleadoresComponent } from './componentes/goleadores/goleadores.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DetalleLigaComponent } from './componentes/detalle-liga/detalle-liga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LigasComponent,
    GoleadoresComponent,
    NotFoundComponent,
    PrincipalComponent,
    FooterComponent,
    DetalleLigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
