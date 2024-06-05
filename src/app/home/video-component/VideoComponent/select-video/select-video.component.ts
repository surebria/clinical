import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { last } from 'rxjs';

@Component({
  selector: 'app-select-video',
  standalone: true,
  imports: [FormsModule, SelectButtonModule, ReactiveFormsModule],
  templateUrl: './select-video.component.html',
  styleUrl: './select-video.component.css',
})
export class SelectVideoComponent {
  formGroup!: FormGroup;
  stateOptions: any[] = [
    { label: 'Cuida tus ojos', value: 'grmseg829fc' },
    { label: 'Curiosidades Medicas', value: 'gkAEyRV9MM8' },
    { label: '¿Por qué el Paracetamol?', value: 'B3lklTZwHW8'}
  ];
  @Output() Emisor = new EventEmitter<string>();

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl('grmseg829fc'),
    });
    this.Emisor.emit('grmseg829fc');
  }
  cambiaVideo(value: string) {
    this.Emisor.emit(value);
  }
}
