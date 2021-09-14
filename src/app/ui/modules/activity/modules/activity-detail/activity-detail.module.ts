import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivityDetailPage } from './activity-detail.page';
import { ActivityResumePage } from './modules/resume/activity-resume.page';
import { ActivityStepsPage } from './modules/steps/activity-steps.page';
import { ActivityTechnicalPage } from './modules/technical/activity-technical.page';
import { ActivityStepDetailPage } from './modules/steps/components/activity-step-detail/activity-step-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ActivityDetailPage, ActivityResumePage, ActivityStepsPage, ActivityTechnicalPage, ActivityStepDetailPage]
})
export class ActivityDetailModule { }
