import { Injectable } from '@angular/core';
import { Cita } from './cita.modle';
import { Doctor } from '../doctor';
import { DOCTORES } from '../misdoctores';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  citas!: Cita[];
  doctores: Doctor[] = DOCTORES;

  constructor() { 
    this.citas=JSON.parse(localStorage.getItem("data") || '[]');
  }

  getDoctores(){
    return this.doctores;
  }
  getCitas(){
    return this.citas;
  }

  agregarCita(cita: Cita){
    this.citas.push(cita);
    localStorage.setItem('data',JSON.stringify(this.citas));
  }

  nuevaCita(): Cita{
    return{
      fecha : new Date(),
      hora: '',
      nombre: '',
      telefono: '',
      costo: 0,
      doctor: '',
    };
  }
}