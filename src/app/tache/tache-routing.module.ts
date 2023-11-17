import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const tacheRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(tacheRoutes)],
  exports: [RouterModule]
})
export class TacheRoutingModule { }
