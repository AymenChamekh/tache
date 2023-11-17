import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TacheRoutingModule } from './tache-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
   
  
    ListComponent,
    UpdateComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    TacheRoutingModule
  ],
  providers: [],
 
})
export class TacheModule { }
