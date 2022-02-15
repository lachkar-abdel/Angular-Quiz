import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('name') namekey!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  startQuiz()
  {
    localStorage.setItem("name",this.namekey.nativeElement.value);
  }
}
