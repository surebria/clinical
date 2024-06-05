import { Injectable } from '@angular/core';
import { Doctor } from '../doctor';
import { DOCTORES } from '../misdoctores';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  doctoresURL: string = 'https://hospitalruspv3.free.beeceptor.com/doctores';
  private misdoctores: Doctor[] = DOCTORES;

  constructor(private http: HttpClient) {}

  getDoctores(): Doctor[] {
    return this.misdoctores;
  }

  establecerDoctores(doctores: Doctor[]) {
    this.misdoctores = doctores;
  }

  getUnDoctor(id: number): Doctor {
    return this.misdoctores[id];
  }

  searchUnDoctor(nombre: string): number {
    console.log(`Mis doctores: ${this.misdoctores} y nombre: ${nombre}`);
    return this.misdoctores.findIndex((doctor) => doctor.nombre === nombre);
  }

  obtenerDoctores() {
    return this.http.get(this.doctoresURL).pipe(take(1));
  }

  obtenerDoctores2() {
    return this.http
      .get('https://hospitalruspv4.free.beeceptor.com/doctores')
      .pipe(take(1));
  }
}
