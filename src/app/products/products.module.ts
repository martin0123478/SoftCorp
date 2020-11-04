import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FormularioComponent } from './components/formulario/formulario.component'
import { ProductsComponent } from './components/products/products.component'
import {ProductRoutingModule} from './products-routing.module'
import {MaterialModule} from './../material/material.module'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    ServiciosComponent,
    FormularioComponent,
    ProductsComponent
  ],
  imports:[
    ProductRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})

export class ProductModule{

}