import { Component } from '@angular/core';
import { Tache } from '../../entities/Tache';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacheService } from '../../service/tache.service';
import { MatDialog } from '@angular/material/dialog';
import { Etat } from '../../entities/Etat';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

 
  tache : Tache = new Tache();
  etat :typeof Etat = Etat ;
  etatKeys: (keyof typeof Etat)[] = Object.keys(this.etat) as (keyof typeof Etat)[];
  providerForm :FormGroup;
  constructor(private fb :FormBuilder, private tacheService:TacheService, private dialog:MatDialog){
    this.providerForm = this.fb.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
      
    });
    
  }

   
  onSubmit(){
    
    if (this.providerForm.valid) {
    
    this.tache = this.providerForm.value;
    console.log(this.tache);
   this.tacheService.addTache(this.tache).subscribe(data =>{
         console.log(data),
         window.location.reload(),
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
