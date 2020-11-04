import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DescriptionComponent} from './componentes/description/description.component'
import {EnterprisesComponent} from './componentes/enterprises/enterprises.component'
import {HeroComponent} from './componentes/hero/hero.component'
import {OpinionsComponent} from './componentes/opinions/opinions.component'
import {ProductiveComponent} from './componentes/productive/productive.component'
import {HomeComponent} from './componentes/home/home.component'
import{HomeRoutingModule} from './home-routing.module';
import { SharedModule} from './../shared/shared.module'
@NgModule({
  declarations:[
    DescriptionComponent,
    EnterprisesComponent,
    HeroComponent,
    OpinionsComponent,
    ProductiveComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})

export class HomeModule{

}