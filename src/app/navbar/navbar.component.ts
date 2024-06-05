import { Component } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip'; // Import the missing module

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatTooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

}