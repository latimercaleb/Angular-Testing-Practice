import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialparagraph',
  templateUrl: './specialparagraph.component.html',
  styleUrls: ['./specialparagraph.component.css']
}) 
export class SpecialparagraphComponent {
  classCol: boolean;

  constructor() { 
    this.classCol = true;
  }

  changeClass() {
    this.classCol = !this.classCol;
    console.log('I was called');
  }

}
