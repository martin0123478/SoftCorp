import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productive',
  templateUrl: './productive.component.html',
  styleUrls: ['./productive.component.scss']
})
export class ProductiveComponent implements OnInit {
  productive = [

    {
      imagen : 'assets/productive/intakeq-website-v01.png',

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
