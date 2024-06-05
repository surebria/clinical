import { Component } from '@angular/core';
import { VideoSelectedComponent } from './VideoComponent/video-selected/video-selected.component';
import { SelectVideoComponent } from './VideoComponent/select-video/select-video.component';

@Component({
  selector: 'app-video-component',
  standalone: true,
  imports: [VideoSelectedComponent, SelectVideoComponent  ],
  templateUrl: './video-component.component.html',
  styleUrl: './video-component.component.css'
})
export class VideoComponentComponent {
  videoValue: string = "";

  enviarVideo(value: string) {
    this.videoValue = value;
  }
}
