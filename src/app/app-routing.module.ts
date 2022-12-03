import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((M) => M.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
