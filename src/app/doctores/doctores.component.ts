import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctores',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './doctores.component.html',
  styleUrl: './doctores.component.css'
})
export class DoctoresComponent {

  misDoctores:Doctor[]=[];

  constructor(private miservicio: DoctorService) {
    this.misDoctores=miservicio.getDoctores();
  }

  ngOnInit(): void {
    console.log("ngOnInit de los Doctores");
    this.misDoctores=this.miservicio.getDoctores();
    console.log(this.misDoctores);
  }

}

