import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { FaveBackgroundComponent } from './fave-background/fave-background.component';


const routes: Routes = [
  {
    path:'',
    component:FaveBackgroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
