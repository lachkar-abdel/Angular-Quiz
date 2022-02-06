import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filier',
  templateUrl: './filier.component.html',
  styleUrls: ['./filier.component.scss']
})
export class FilierComponent implements OnInit {

  public name: string="";
  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem("name")!;
  }

}
