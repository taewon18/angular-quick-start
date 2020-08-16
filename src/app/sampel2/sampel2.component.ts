import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampel2',
  templateUrl: './sampel2.component.html',
  styleUrls: ['./sampel2.component.css']
})
export class Sampel2Component implements OnInit {
  name = 'taewon';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'seungyeon';
    }, 2000);
  }

  changeName() {
    if(this.name === 'taewon') { this.name = 'seungyeon'; }
    else if(this.name == 'seungyeon') { this.name = 'taewon'; }
  }
}
