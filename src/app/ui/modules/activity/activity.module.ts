import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityPage } from './activity.page';
import { ActivityDetailModule } from './modules/activity-detail/activity-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityRoutingModule,
    ActivityDetailModule
  ],
  declarations: [ActivityPage]
})
export class ActivityModule {}
