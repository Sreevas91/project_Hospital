import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient'
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  constructor(private patientServive: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients(){
    this.patientServive.getPatientsList().subscribe(data => {
      this.patients = data;
    });
  }

  patientDetails(id: String){
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: String){
    this.router.navigate(['update-patient', id]);
  }

  deletePatient(id: String){
    this.patientServive.deletePatient(id).subscribe(data =>{
      console.log(data);
      this.getPatients();
    })
  }
}
