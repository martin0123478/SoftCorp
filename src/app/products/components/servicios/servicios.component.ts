import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
products=[
  {
    title:'Frontend',
    subtitle:'Implemente aplicaciones más rápido',
    img:'./assets/servicios/front.png',
    description:'Implemente aplicaciones más rápido Adquiera nuevos suscriptores aumentando la confiabilidad y escalabilidad',

  },
  {
    title:'Backend',
    subtitle:'Busque una nueva oportunidad de mercado',
    img:'./assets/servicios/backend.png',
    description:'Nuestros desarrolladores rediseñaron el backend y desarrollaron el frontend para crear una nueva experiencia e involucrar a los usuarios. ',

  },
  {
    title:'Mobile',
    subtitle:'Creamos la app mobile a tu medida',
    img:'./assets/servicios/app.png',
    description:'Obten la app que necesitas para tu negocio ',

  },
  {
    title:'IA',
    subtitle:'IA que se adapta a tu negocio',
    img:'./assets/servicios/IA.png',
    description:'Sabemos que la IA es algo más que coches autónomos. Ayudamos a empresas de todas las industrias a aplicar la IA para innovar procesos y mejorar los resultados. Aprenda a aprovechar sus datos para trabajar con modelos de IA y aprendizaje automático. ',

  },
  {
    title:'Ciencia de Datos',
    subtitle:'Impulsando soluciones con datos',
    img:'./assets/servicios/data.png',
    description:'Ayudamos a nuestros clientes a organizar sus datos de una manera que se enfoca en resolver los problemas de los usuarios.',

  },
  {
    title:'DevOps',
    subtitle:'DevOps en SoftCorp es una cultura, no un rol.',
    img:'./assets/servicios/dev.png',
    description:' La práctica de la transformación de DevOps surgió cuando nos preguntamos cómo podríamos ayudar a nuestros clientes para que comprendan mejor sus procesos de desarrollo.  '

  },

  
  {
    title:'Cloud',
    subtitle:'Impulsando soluciones en la nube',
    img:'./assets/servicios/cloud.png',
    description:' Ayudamos a nuestros clientes a maximizar su inversión en tecnologías en la nube. '

  },

  {
    title:'Diseño UX',
    subtitle:'El diseño es más que solo píxeles en una pantalla.',
    img:'./assets/servicios/ux.png',
    description:' El buen diseño alinea los valores con la marca, la estrategia con la experiencia y la visión con la ejecución.  '

  },

]
  constructor() { }

  ngOnInit(): void {
  }

}
