import { ShowcaseComponent } from './../showcase/container/showcase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: ShowcaseComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
