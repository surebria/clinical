import { Component, Input } from '@angular/core';
import { DomseguroPipe } from '../../domseguro.pipe';

@Component({
  selector: 'app-video-selected',
  standalone: true,
  imports: [DomseguroPipe],
  templateUrl: './video-selected.component.html',
  styleUrl: './video-selected.component.css'
})
export class VideoSelectedComponent {
  @Input() video!: string;
}
