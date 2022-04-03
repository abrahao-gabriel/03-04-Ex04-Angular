import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  Counter() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}
