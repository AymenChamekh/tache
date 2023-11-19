import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheRoutingModule } from './tache/tache-routing.module';
import { TacheModule } from './tache/tache.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TacheModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
