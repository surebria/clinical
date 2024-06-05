import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  mostrarAlerta(title: string, message: string, icon: 'error' ): void {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: 'Aceptar'
    });
}

  
}
