import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChennaiPlayersComponent } from './components/chennai-players/chennai-players.component';
import { ChennaiInfoComponent } from './components/chennai-info/chennai-info.component';
import { RouterModule, Routes } from '@angular/router';

const chennaiRoutes:Routes = [
  { path: 'players', component: ChennaiPlayersComponent },
  { path: 'info', component: ChennaiInfoComponent },
  { path: '', redirectTo: 'players' }
]

@NgModule({
  declarations: [
    ChennaiPlayersComponent,
    ChennaiInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(chennaiRoutes)
  ]
})
export class ChennaiModule { }
