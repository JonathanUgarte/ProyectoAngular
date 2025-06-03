import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JlcarsCarsComponent } from './jlcars-cars/jlcars-cars.component';
import { JlcarsAboutComponent } from './jlcars-about/jlcars-about.component';

const routes: Routes = [

  {
    path : '',
    redirectTo : 'cars',
    pathMatch : 'full',
  },
  {
    path : 'cars',
    component : JlcarsCarsComponent,
  },
  {
    path : 'about',
    component : JlcarsAboutComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
