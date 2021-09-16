import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path:'', 
    children:[
      {
        path:'',
        pathMatch:'full',
        component: AboutPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
