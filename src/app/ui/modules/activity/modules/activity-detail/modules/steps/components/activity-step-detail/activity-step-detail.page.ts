import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';
import { Step } from '../../../../../../../../../data/interfaces/activity/step.interface';

@Component({
  selector: 'app-activity-step-detail',
  templateUrl: './activity-step-detail.page.html',
})
export class ActivityStepDetailPage implements OnInit {
  @Input() step: Step;
  
  public activity: Activity;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  public async close(): Promise<void> {
    await this.modalController.dismiss();
  }

}
