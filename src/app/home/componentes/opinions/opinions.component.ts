import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss']
})
export class OpinionsComponent implements OnInit {
  opinions=[
    {
      opinion:' "Con SoftCorp pude crecer mi negocio"',
      imagen:'assets/opinion/profile-1.jpg',
      name:'Satish Patell',
      job:'Founder & CEO Contalisto'
    },
    {
      opinion:' "Gracias a SoftCorp hice a mis clientes más felices"',
      imagen:'assets/opinion/profile-2.jpg',
      name:'Bruce Maklence',
      job:'Founder & CEO Conekta'
    },
    {
      opinion:' "Gracias SoftCorp potencializaron mi Tienda en línea"',
      imagen:'assets/opinion/profile-3.jpg',
      name:'Bruce Maklence',
      job: 'Founder & CEO Huddle'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
