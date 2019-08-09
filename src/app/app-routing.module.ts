import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { InnovationsPageComponent } from './pages/innovations-page/innovations-page.component';
import { CgiarEntityPageComponent } from './pages/cgiar-entity-page/cgiar-entity-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: ':entityAcronym', component: CgiarEntityPageComponent },
  { path: ':entityAcronym/innovations', component: InnovationsPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
