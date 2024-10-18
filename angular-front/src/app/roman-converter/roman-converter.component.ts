import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-roman-converter',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './roman-converter.component.html',
  styleUrl: './roman-converter.component.css'
})export class RomanConverterComponent {
  arabicNumber: number = 0;
  romanResult: string | undefined;
  url: string = "http://localhost:3000"

  

  async convertToRoman() {
    
    const response = await fetch(`${this.url}/convert?number=${this.arabicNumber}`);
    const data = await response.json();
    this.romanResult = data.roman;
    
  }
}
