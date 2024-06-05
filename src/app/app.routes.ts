import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AcercaComponent } from './acerca/acerca.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { AltaCitaComponent } from './citas/alta-cita/alta-cita.component';
import { ReporteCitasComponent } from './citas/reporte-citas/reporte-citas.component';
import { SearchComponent } from './search/search.component';
import { UndoctorComponent } from './undoctor/undoctor.component';


export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'doctores',component: DoctoresComponent},
    {path: 'alta-cita',component: AltaCitaComponent},
    {path: 'alta-cita/:nombre',component: AltaCitaComponent},
    {path: 'reporte-cita',component: ReporteCitasComponent},
    {path: 'doctor/:id', component: UndoctorComponent},
    {path: 'buscador/:nombred', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

