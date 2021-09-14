import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPage } from './activity.page';
import { ActivityDetailPage } from './modules/activity-detail/activity-detail.page';
import { ActivityResumePage } from './modules/activity-detail/modules/resume/activity-resume.page';
import { ActivityStepsPage } from './modules/activity-detail/modules/steps/activity-steps.page';
import { ActivityTechnicalPage } from './modules/activity-detail/modules/technical/activity-technical.page';

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
        component: ActivityDetailPage,
        children: [{
          path:'',
          pathMatch:'full',
          component: ActivityResumePage,
        },
        {
          path: 'resume',
          component: ActivityResumePage
        },
        {
          path: 'technical',
          component: ActivityTechnicalPage
        },
        {
          path: 'steps',
          component: ActivityStepsPage,
        }
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}
