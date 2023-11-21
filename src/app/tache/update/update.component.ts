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
  etat :typeof Etat = Etat ;
  newTache:Tache= new Tache();
  etatKeys: (keyof typeof Etat)[] = Object.keys(this.etat) as (keyof typeof Etat)[];
  providerForm :FormGroup;
  constructor(private fb :FormBuilder, private tacheService:TacheService, private dialog:MatDialog){
    this.providerForm = this.fb.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
      
    });
  }
  ngOnInit(): void {
    
    console.log("la nouvelle tache"+this.newTache);


  }

  onSubmit(){
    if (this.providerForm.valid) {
     this.newTache.id=this.currentTache.id;
     this.newTache.nom = this.providerForm.value.nom;
     this.newTache.etat = this.providerForm.value.etat;
     console.log(this.newTache);
     this.tacheService.addTache(this.newTache).subscribe(data =>{
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
