import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  description = [
    {
      imagen: 'assets/description/icon-access-anywhere.svg',
      title: 'Software para cualquier dispositivo',
      inf: 'Acceso multiplataforma'
    },
    {
      imagen: 'assets/description/icon-security.svg',
      title: 'Protegemos tus datos',
      inf: 'Aseguramos todos tu datos de las aplicaciones'
    },
    {
      imagen: 'assets/description/icon-collaboration.svg',
      title: 'Monitoreo en tiempo real',
      inf: 'Accede a tus datos en cualquier momento'
    },
    {
      imagen: 'assets/description/files.svg',
      title: 'Tu infomación almacenada en forma persistente',
      inf: 'Con nuestros servicios colabora en timpo real'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
