import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { UndoctorComponent } from "../undoctor/undoctor.component";
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AlertService } from '../alerts/alert.service';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [UndoctorComponent]
})
export class SearchComponent implements OnInit{
  alertaMostrada=false;
  nombred: string = "";
  indice: number = 0;

  miDoctor: Doctor = {

    cedula: "",
    nombre: "",
    img: "",
    titulo: "",
    universidad: "",
    especialidad: "",
    lugarEspecialidad: "",
    areasExperiencia: [],
    costoconsulta: 0
  };
constructor(
    private doctorService: DoctorService, private activatedRoute: ActivatedRoute, private alertService: AlertService 
) {}

ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.nombred = params['nombred'];
        this.indice = this.doctorService.searchUnDoctor(this.nombred);
        if (this.indice === -1 && !this.alertaMostrada) { 
          this.alertService.mostrarAlerta('Error', `No se encontraron resultados para ${this.nombred}`, 'error');
          this.alertaMostrada = true;
        } else {
          this.mostrarLoading();
          setTimeout(() => { 
            this.miDoctor = this.doctorService.getUnDoctor(this.indice);
            this.cerrarLoading(); 
          }, 2000);
        }
      });
    }
  
    mostrarLoading(): void {
      Swal.fire({
        title: "Estamos buscando al doctor...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    }
  
    cerrarLoading(): void {
      Swal.close();
    }
    
}
