import { Component } from '@angular/core';
import { Cita } from '../cita.modle';
import { Doctor } from '../../doctor';
import { CitasService } from '../citas.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import Swal from 'sweetalert2';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-alta-cita',
  standalone: true,
  imports: [
    FormsModule,
    MessagesModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    FloatLabelModule,
    CommonModule,
  ],
  templateUrl: './alta-cita.component.html',
  styleUrl: './alta-cita.component.css',
})
export class AltaCitaComponent {
  cita!: Cita;
  consultas!: Cita[];
  doctores!: Doctor[];
  porParametro: boolean = false;
  valor = false;
  minDate: Date;
  messages!: any[];

  constructor(
    private citasService: CitasService,
    public activatedRoute: ActivatedRoute,
    private config: PrimeNGConfig
  ) {
    this.consultas = this.citasService.getCitas();
    this.minDate = new Date();
  }

  ngOnInit() {
    this.config.setTranslation({
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
    });
    this.cita = this.citasService.nuevaCita();
    this.doctores = this.citasService.getDoctores();

    this.activatedRoute.params.subscribe((params) => {
      // Por default siempre entra a la ruta tenga o no parametros
      // Sin embargo, al no haber nombre en la ruta, no se asigna el nombre del doctor
      if (params['nombre'] != null) {
        this.cita.doctor = params['nombre'];
        this.porParametro = true;
      }
    });
  }

  nuevaCita(): void {
    // Verifica si se llena el form
    if (
      !this.cita.doctor ||
      !this.cita.fecha ||
      !this.cita.hora ||
      !this.cita.nombre ||
      !this.cita.telefono ||
      this.existeAlerta(document.getElementById('AlertaDiv'))
    ) {
      Swal.fire(
        '¡Formulario invalido!',
        'Por favor rellente todos los campos correctamente antes de guardar la cita.',
        'warning'
      );
      return;
    }
    //presionar el btn guardar
    Swal.fire({
      title: '¿Desea guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: 'No Guardar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.citasService.agregarCita(this.cita);
        this.cita = this.citasService.nuevaCita();
        Swal.fire('¡Cita Agendada!', '', 'success');
      } else if (result.isDenied) {
        this.cita = this.citasService.nuevaCita();
        Swal.fire('No se completó la cita', '', 'info');
      }
    });
  }

  horariosDisponibles: string[] = [
    '10:00 - 10:30 AM',
    '10:30 - 11:00 AM',
    '11:00 - 11:30 AM',
    '11:30 - 12:00 PM',
    '12:00 - 12:30 PM',
    '12:30 - 1:00 PM',
    '1:00 - 1:30 PM',
    '1:30 - 2:00 PM',
  ];

  horarionoDisponible(): void {
    Swal.fire(
      '¡Horario no disponible!',
      'Por favor selecciona otro horario.',
      'warning'
    );
    this.cita.hora = '';
  }

  asignarCosto() {
    const doctorSeleccionado = this.doctores.find(doctor => doctor.nombre === this.cita.doctor);
    if (doctorSeleccionado) {
        this.cita.costo = doctorSeleccionado.costoconsulta;
    } else {
        this.cita.costo = 0; 
    }
}


  existeAlerta(elementoHTML: any): boolean {
    return elementoHTML.children.length > 0;
  }

  validacionesTelefono(inputTelefono: any): boolean {
    return inputTelefono.value.length !== 10 || !/^[0-9]+$/.test(inputTelefono.value);
    // Solo se permiten numeros y la longitud debe ser de 10
  }

  validacionesNombre(inputNombre: any): boolean {
    return !/^[a-zA-Z\s]+$/.test(inputNombre.value);
    // Solo se permiten letras y espacios
  }
  
}
