import { NgModule} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './components/products/products.component'
const routes:Routes=[
  {
    path:'',
    component: ProductsComponent
  }
]
@NgModule({
imports:[
  RouterModule.forChild(routes),

],
exports:[
  RouterModule
]
})
export class ProductRoutingModule{

}