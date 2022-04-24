import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealPlayersComponent } from './components/real-players/real-players.component';
import { RealInfoComponent } from './components/real-info/real-info.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: 'players', component: RealPlayersComponent  }
]

@NgModule({
  declarations: [
    RealPlayersComponent,
    RealInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RealMadridModule { }
