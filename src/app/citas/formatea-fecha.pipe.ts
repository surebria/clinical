import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateaFecha',
  standalone: true
})
export class FormateaFechaPipe implements PipeTransform {

  transform(fechaTransformar: any): string {
    fechaTransformar = new Date(fechaTransformar).toISOString();
    return fechaTransformar.toString().split('T')[0].replace(/-/g, '/');
  }

}
