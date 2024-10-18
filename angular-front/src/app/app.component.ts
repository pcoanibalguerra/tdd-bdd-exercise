import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RomanConverterComponent } from './roman-converter/roman-converter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RomanConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-front';
}
