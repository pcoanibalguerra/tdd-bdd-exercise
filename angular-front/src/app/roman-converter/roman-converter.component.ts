import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-roman-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roman-converter.component.html',
  styleUrl: './roman-converter.component.css'
})export class RomanConverterComponent {
  arabicNumber: number = 0;
  romanResult: string | undefined;

  

  convertToRoman() {
    this.romanResult = "I";
    
  }
}
