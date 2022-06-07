// Copyright (c) TechFishe 2022

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { WildCardComponent } from './Pages/wild-card/wild-card.component';
//import { GamesComponent } from './Pages/games/games.component';

const routes: Routes = [
  {
    path: 'Home', 
    title: 'Home', 
    component: HomeComponent
  },
  {
    path: 'About',
    title: 'About',
    component: AboutComponent
  },
  // {
  //   path: 'Games',
  //   title: 'Games',
  //   component: GamesComponent
  // },
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
