import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Cricket99Component } from './components/cricket99/cricket99.component';
import { Football99Component } from './components/football99/football99.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    Cricket99Component,
    Football99Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubAppsModule { }
