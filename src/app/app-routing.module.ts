import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricketSubApplication } from 'projects/cricket/src/app/app.module';
import { FootballSubApplication } from 'projects/football/src/app/app.module';

const routes: Routes = [
  {
    path: 'subApps',
    loadChildren: () => import('./sub-apps/sub-apps.module').then(m=>m.SubAppsModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then(m=>m.Test1Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CricketSubApplication.forRoot(),        // it seems, adding this is important...
                                              // try removing these from imports array of app-routing.module.ts
    FootballSubApplication.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
