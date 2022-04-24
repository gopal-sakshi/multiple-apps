import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'football/RealMadrid',
    loadChildren: () => import('./real-madrid/real-madrid.module').then(m=>m.RealMadridModule)
  },
  {
    path: 'football/barcelona',
    loadChildren: () => import ('./barcelona/barcelona.module').then(m=>m.BarcelonaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
