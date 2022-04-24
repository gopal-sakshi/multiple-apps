import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MumPlayersComponent } from './components/mum-players/mum-players.component';
import { MumInfoComponent } from './components/mum-info/mum-info.component';
import { RouterModule, Routes } from '@angular/router';

const mumbaiRoutes:Routes = [
  { path: 'players', component: MumPlayersComponent },
  { path: 'info', component: MumInfoComponent },
  { path: '', redirectTo: 'players' }
]

@NgModule({
  declarations: [
    MumPlayersComponent,
    MumInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mumbaiRoutes)
  ]
})
export class MumbaiModule { }
