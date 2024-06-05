import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-undoctor',
  standalone: true,
  imports: [RouterModule, CommonModule, TableModule],
  templateUrl: './undoctor.component.html',
  styleUrl: './undoctor.component.css'
})
export class UndoctorComponent {

  @Input() doctor!: Doctor;
  constructor(public doctorService: DoctorService, public activatedRoute: ActivatedRoute, private config: PrimeNGConfig){
    this.activatedRoute.params.subscribe(params => {  
      this.doctor = doctorService.getUnDoctor(params['id'])
    })
  }

}
