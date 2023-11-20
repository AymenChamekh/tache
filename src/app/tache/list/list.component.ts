import { Component, ViewChild } from '@angular/core';
import { Tache } from '../../entities/Tache';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { TacheService } from '../../service/tache.service';
import { MatTableDataSource } from '@angular/material/table';
import { AddComponent } from '../add/add.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  id: number;
  taches : Tache[] = [];
  tache : Tache = new Tache();
  searchkey :string;
  displayedColumns=['Nom','Etat','Actions'];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  datasource: MatTableDataSource<any>;
  
  constructor(private tacheService : TacheService ,public dialog : MatDialog){}

  ngOnInit(){
    this.tacheService.getTaches().subscribe((response: any) => {
      this.datasource = new MatTableDataSource(response);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.matSort;
      console.log(this.datasource);
    });
  }
  onSearchClear() {
    this.searchkey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.datasource.filter = this.searchkey.trim().toLowerCase();
  }

  openDialogAddTache():void{

    let dialogRef = this.dialog.open(AddComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log('the dialog was closed',result);
    });
  }

}
