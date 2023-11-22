import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TacheRoutingModule } from './tache-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import {  HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    TacheRoutingModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [
    
  ],
 
})
export class TacheModule { }
