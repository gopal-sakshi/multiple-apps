import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cricket/chennai',
    loadChildren: () => import('./chennai/chennai.module').then(m=>m.ChennaiModule)
  },
  {
    path: 'cricket/mumbai',
    loadChildren: () => import('./mumbai/mumbai.module').then(m=>m.MumbaiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
