import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const tacheRoutes: Routes = [
  {path : 'list' , component :ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(tacheRoutes)],
  exports: [RouterModule]
})
export class TacheRoutingModule { }
