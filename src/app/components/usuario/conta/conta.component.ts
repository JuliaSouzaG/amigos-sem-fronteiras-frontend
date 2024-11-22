import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatIconModule, RouterLinkActive],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent {

}
