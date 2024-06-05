import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CardsComponent } from '../cards/cards.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { VideoComponentComponent } from './video-component/video-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CardsComponent, GaleriaComponent, VideoComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
