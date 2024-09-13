import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
