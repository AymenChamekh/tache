import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';
import { Tache } from '../../entities/Tache';
import { Etat } from '../../entities/Etat';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      imports :[ HttpClientTestingModule , SharedModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize t if currentTache is provided', () => {
       
    // Arrange
    const currentTache: Tache = { id: 1, nom: 'Tache1', etat: Etat.En_cours };
    
    component.currentTache = currentTache;

    // Act
    component.ngOnInit();

    // Assert
    expect(component.t).toEqual(currentTache);
  });
});
