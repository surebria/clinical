import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Miembros, MiembrosDesarrollo } from './miembros.interface';
import { CommonModule } from '@angular/common';
import Masonry from 'masonry-layout';
@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent implements OnInit, AfterViewInit {
  @ViewChild('masonryContainer') masonryContainer!: ElementRef;
  miembrosEquipoDesarrollo: MiembrosDesarrollo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarMiembrosEquipoDesarrollo();
  }


  cargarMiembrosEquipoDesarrollo() {
    this.miembrosEquipoDesarrollo = [
      {
        nombre: 'Uriel Ulises Acosta Olvera',
        imagenUrl: 'assets/img_miembrosEquipo/uriel.jpeg'

      },
      {
        nombre: 'Juan Pablo de Luna de la Serna',
        imagenUrl: 'assets/img_miembrosEquipo/deluna.jpeg'

      },
      {
        nombre: 'Valeria Nuñez de Lira',
        imagenUrl: 'assets/img_miembrosEquipo/valeria.jpeg'

      },
      {
        nombre: 'Johan Ronaldo Martinez Ramirez',
        imagenUrl: 'assets/img_miembrosEquipo/rony.jpeg'

      },
      {
        nombre: 'Xitlali Sarahi Reyes Reyes',
        imagenUrl: 'assets/img_miembrosEquipo/xitlali.jpeg'

      }
    ];
  }
  
  testimonios = [
    {
      titulo: 'Experiencia fantástica',
      contenido: 'Me encantó la experiencia en este centro médico. El personal fue amable y servicial en todo momento.',
      autor: 'Luis Rodríguez'
    },
    {
      titulo: 'Trato excepcional',
      contenido: 'Nunca había recibido una atención tan personalizada como la que recibí aquí. ¡Increíble!',
      autor: 'Laura García'
    },
    {
      titulo: 'Muy satisfecho con el servicio',
      contenido: 'Los servicios médicos ofrecidos aquí son de primera calidad. Me siento agradecido por el cuidado que recibí.',
      autor: 'Carlos Fernández'
    },
    {
      titulo: 'Ambiente acogedor',
      contenido: 'El ambiente en este centro médico es muy acogedor y relajante. ¡Definitivamente lo recomendaría!',
      autor: 'Elena López'
    }
  ];
  
  testimonioColor = '#D7F0FF';
  testimonioPadding = '10px 20px'
  testimonioMargin = '15px';
  mostrarBorde = true;
  testimonioFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;";

  images = [

    { src: 'assets/img_miembrosEquipo/trauma1.jpg', alt: 'Imagen 1' },
  { src: 'assets/img_miembrosEquipo/lab1.jpg', alt: 'Imagen 2' },
  { src: 'assets/img_miembrosEquipo/dentist.jpg', alt: 'Imagen 3' },
  { src: 'assets/img_miembrosEquipo/medicina2.jpg', alt: 'Imagen 4' },
  { src: 'assets/img_miembrosEquipo/medicina3.jpg', alt: 'Imagen 5' },
  { src: 'assets/img_miembrosEquipo/dentist2.jpg', alt: 'Imagen 6' },
  { src: 'assets/img_miembrosEquipo/medicina.jpg', alt: 'Imagen 7' },
  { src: 'assets/img_miembrosEquipo/lab.jpg', alt: 'Imagen 8' },
  { src: 'assets/img_miembrosEquipo/lab2.jpg', alt: 'Imagen 9' },
  { src: 'assets/img_miembrosEquipo/lab3.jpg', alt: 'Imagen 10' }
  ];



  ngAfterViewInit(): void {
    this.initMasonry();
  }
  initMasonry(): void {
    const masonry = new Masonry(this.masonryContainer.nativeElement, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-sizer',
      percentPosition: true
    });
  }
  

}
