import { Component, Inject, Input } from '@angular/core';
import { Tache } from '../../entities/Tache';
import { Etat } from '../../entities/Etat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacheService } from '../../service/tache.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {

  @Input() currentTache:Tache | null;
  t : Tache = new Tache();
  etat :typeof Etat = Etat ;
  etatKeys: (keyof typeof Etat)[] = Object.keys(this.etat) as (keyof typeof Etat)[];
  providerForm :FormGroup;
  
  constructor(private fb :FormBuilder, private tacheService:TacheService,private dialog:MatDialog){
    this.providerForm = this.fb.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
      
    });
   
  }
 
  ngOnInit(){
    if (this.currentTache) {
      this.t = this.currentTache;
    }

  }
  onSubmit(){
    
    if (this.providerForm.valid) {
    
   const updatetache = this.providerForm.value;
   if (this.currentTache){
    updatetache.id = this.currentTache.id;}
   this.tacheService.updateTache(updatetache).subscribe(data =>{
         console.log(data),
         (error:any) =>{console.log(error)}
   });
   this.dialog.closeAll();
   window.location.reload();
    }
}
onCancel() {
  // Implement the onCancel logic here, for example, closing the dialog
  this.dialog.closeAll(); // Assuming you are using MatDialog, adjust as needed
  console.log('Canceled');
}
}
