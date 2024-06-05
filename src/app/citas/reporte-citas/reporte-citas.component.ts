import { Component } from '@angular/core';
import { CitasService } from '../citas.service';
import { Cita } from '../cita.modle';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FormateaFechaPipe } from '../formatea-fecha.pipe';

@Component({
  selector: 'app-reporte-citas',
  standalone: true,
  imports: [CalendarModule, FormsModule, FormateaFechaPipe],
  templateUrl: './reporte-citas.component.html',
  styleUrl: './reporte-citas.component.css',
})
export class ReporteCitasComponent {
  fechasFiltro!: Date;
  citas!: Cita[];
  fechaActual!: Date;

  constructor(private citasService: CitasService) {
    this.citas = this.citasService.getCitas();
    for (let cita of this.citas) {
    }
    this.fechaActual = new Date();
    this.fechaActual.setHours(0, 0, 0, 0);
    // Se setean las horas a 0 para que la comparacion de las fechas sea correcta
  }

  fechaPosterior(fechaCita: Date): any {
    // Por alguna razón desconocida aunque se pase como tipo Date, se tienen que convertir a Date
    // Para poder usar "getTime()" y hacer la comparacion correcta de las citas a tiempo correcto
    // y asi filtrarlas de las citas que ya pasaron
    let fechaCitaDate = new Date(fechaCita);
    fechaCitaDate.setHours(0, 0, 0, 0);
    return fechaCitaDate.getTime() >= this.fechaActual.getTime();
    // Si las fechas (Que solo se comparan los dias ya que las horas estan en 0)
    // Son iguales o la fecha de la cita es posterior a la fecha actual se regresa true
    // Quiere decir que si es el mismo dia que la fecha, no se considera fecha posterior hasta el dia siguiente
  }

  entreRangos(fechaFiltros: any, fechaCita: any): boolean {
    // Ninguna de las fechas puede ser undefined, si lo son no se puede comparar
    // Ademas ninguna llega como "Date" por lo que se tienen que convertir a Date
    let fecha1 = fechaFiltros[0]?.getTime();
    let fecha2 = fechaFiltros[1]?.getTime();
    fechaCita = new Date(fechaCita);
    fechaCita.setHours(0, 0, 0, 0);
    // Se setean las horas a 0 para que la comparacion de las fechas sea correcta
    fechaCita = fechaCita.getTime();
    // Se convierte a milisegundos para poder comparar las fechas


    // Solo asi funciona, se pasa por parametros las fechas filtradas (Que son un arreglo de 2 fechas)
    // Pero debido a que pueden o no estar establecidas se tiene que hacer un chequeo de si existen
    // Y si existen se convierten a milisegundos para poder compararlas con la fecha actual

    return fechaCita >= fecha1 && fechaCita <= fecha2;
  }

  algunaFechaUndefined(fechas: any): boolean {
    if(fechas instanceof Array){
      // Si ni siquiera es un arreglo de fechas, no se puede comparar
      // Por lo mismo primero se verifica que se intenta poner un rango de fechas
      return fechas[0] === null || fechas[1] === null;
    }
    return false;
    // Se verifica si alguna de las fechas es undefined
    // Si lo es se regresa true, si no se regresa false
  }

  tieneHijos(elementoHTML: any): boolean {
    // Se verifica si el elemento tiene hijos
    return elementoHTML.children.length > 0;
  }
}
