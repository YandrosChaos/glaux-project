import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPage } from './activity.page';
import { ActivityDetailPage } from './modules/activity-detail/activity-detail.page';

const routes: Routes = [
  {
    path:'', 
    children:[
      {
        path:'',
        pathMatch:'full',
        component: ActivityPage,
      },
      {
        path:'detail/:hash', 
        component: ActivityDetailPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}
