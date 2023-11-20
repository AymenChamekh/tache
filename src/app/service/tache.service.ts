import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from '../entities/Tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private tacheServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public addTache(data : Tache):Observable<any>{
    return this.http.post(`${this.tacheServerUrl}/tache/add`,data);}

  public getTaches(): Observable<Tache[]>{
      return this.http.get<Tache[]>(`${this.tacheServerUrl}/tache/findAll`); }

  public deleteTache(id : number):Observable<any>{
    return this.http.delete(`${this.tacheServerUrl}/tache/delete/${id}`);
  }
  public updateTache(data : Tache):Observable<any>{
    return this.http.put(`${this.tacheServerUrl}/tache/update/${data}`,data);}

    public getTache(id : number): Observable<any>{
      return this.http.get<Tache>(`${this.tacheServerUrl}/tache/find/${id}`); }
}
