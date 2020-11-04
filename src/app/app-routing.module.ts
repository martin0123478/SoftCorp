import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LayoutComponent} from './layout/layout.component'
import { HomeModule } from './home/home.module';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
   
    children:[
      {
        path: '',
        redirectTo:'/home',
        pathMatch:'full',
      },
      {
        path: 'home',
        loadChildren: () => import ('./home/home.module').then(m=>HomeModule)
      },
      {
        path: 'products',
        loadChildren:()=> import ('./products/products.module').then(m=>m.ProductModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
