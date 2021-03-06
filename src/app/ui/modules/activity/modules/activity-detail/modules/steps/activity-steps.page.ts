import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';
import { ActivityStepDetailPage } from './components/activity-step-detail/activity-step-detail.page';
import { Step } from '../../../../../../../data/interfaces/activity/step.interface';

@Component({
  selector: 'app-activity-steps',
  templateUrl: './activity-steps.page.html',
})
export class ActivityStepsPage implements OnInit {
  public activity: Activity;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.activity = this.router.getCurrentNavigation().extras.state.activity;
      }
    });
  }

  public async presentModal(step: Step): Promise<void> {
    const modal = await this.modalController.create({
      component: ActivityStepDetailPage,
      componentProps: {
        step: step,
      }
    });
    return await modal.present();
  }

}
