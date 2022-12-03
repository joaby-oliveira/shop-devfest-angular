import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
