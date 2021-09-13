import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPage } from './modules/activity/activity.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule {}
