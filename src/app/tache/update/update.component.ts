import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../../entities/Tache';
import { TacheService } from '../../service/tache.service';
import { Etat } from '../../entities/Etat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
  @Input() currentTache:Tache;
  taches:Tache[]=[];
  etat :typeof Etat = Etat ;
  etatKeys: (keyof typeof Etat)[] = Object.keys(this.etat) as (keyof typeof Etat)[];
  providerForm :FormGroup;
  constructor(private fb :FormBuilder, private tacheService:TacheService, private dialog:MatDialog){
    this.providerForm = this.fb.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
      
    });
  }
  ngOnInit(): void {
    this.taches.push(this.currentTache);
    console.log(this.taches);
  }

  onSubmit(){
    if (this.providerForm.valid) {
    
      this.currentTache = this.providerForm.value;
     this.tacheService.updateTache(this.currentTache).subscribe(data =>{
           (error:any) =>{console.log(error)}
     });
     this.dialog.closeAll();
     window.location.reload();
      }


  }

  onCancel(){
    this.dialog.closeAll(); // Assuming you are using MatDialog, adjust as needed
    console.log('Canceled');

  }
  
  



}
