import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sampel3',
  templateUrl: './sampel3.component.html',
  styleUrls: ['./sampel3.component.css']
})
export class Sampel3Component implements OnInit {

  @Input() test;

  constructor() { }

  ngOnInit() {
  }

}
