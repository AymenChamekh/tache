import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TacheRoutingModule } from './tache-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {  MatTableModule } from '@angular/material/table';
import {  HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    TacheRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    
  ],
 
})
export class TacheModule { }
