import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/v1/patients";
  constructor(private httpClient: HttpClient) { }

  getPatientsList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  registerPatient(patient: Patient):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,patient);
  }

  getPatientById(id: String): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updatePatient(id: String, patient: Patient):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,patient);
  }

  deletePatient(id: String):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
