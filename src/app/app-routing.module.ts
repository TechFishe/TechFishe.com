// Copyright (c) TechFishe 2022

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { WildCardComponent } from './Pages/wild-card/wild-card.component';
import { GamesComponent } from './Pages/games/games.component';

const routes: Routes = [
  {
    path: 'Home', 
    title: 'Home', 
    component: HomeComponent
  },
  {
    path: 'About-Me',
    title: 'About Me',
    component: AboutMeComponent
  },
  {
    path: 'Games',
    title: 'Games',
    component: GamesComponent
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: '**', 
    title: 'Page Not Found',
    component: WildCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
