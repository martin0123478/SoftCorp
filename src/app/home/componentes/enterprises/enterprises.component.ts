import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.scss']
})
export class EnterprisesComponent implements OnInit {
  empresas=[
    {
      img:'assets/empresas/gdg.png'
  
    },
    {
      img:'assets/empresas/IBM.jpg'
  
    },
    {
      img:'assets/empresas/platzi.png'
    },
    {
      img:'assets/empresas/wizeline.png'
  
    },
    {
      img:'assets/empresas/ycombinator.png'
  
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
