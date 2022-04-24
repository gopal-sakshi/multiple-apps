import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarPlayersComponent } from './components/bar-players/bar-players.component';
import { BarInfoComponent } from './components/bar-info/bar-info.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: 'players', component: BarPlayersComponent  }
]

@NgModule({
  declarations: [
    BarPlayersComponent,
    BarInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BarcelonaModule { }
