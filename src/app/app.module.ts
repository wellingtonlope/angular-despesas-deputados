import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { DeputadoService } from "./service/deputado.service";
import {ChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ChartsModule
  ],
  providers: [
    DeputadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
