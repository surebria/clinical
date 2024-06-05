import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorService } from './shared/doctor.service';
import { DOCTORES } from './misdoctores';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medicalCenter';

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.recuperarDatos();
  }

  recuperarDatos() {
    this.doctorService.obtenerDoctores().subscribe({
      next: this.successRequest.bind(this),
      error: (err) =>{ 
        console.error(`Peticion fallida ;Cambiando pagina`); 
        this.doctorService.obtenerDoctores2().subscribe({
          next: this.successRequest.bind(this),
          error: (err) =>{ 
            console.error(`Peticion fallida ; 100 intentos acabados`); 
          }
        });}
    });
  }

  successRequest(data: any) {
    console.log('Peticion exitosa: ', data);
    DOCTORES.splice(0, DOCTORES.length, ...data.doctores);
    this.doctorService.establecerDoctores(data.doctores);
    // Para modificar el array de doctores, se debe hacer con splice para 
    // DOCTORES = data.doctores; <== Esto no funciona
  }
}
