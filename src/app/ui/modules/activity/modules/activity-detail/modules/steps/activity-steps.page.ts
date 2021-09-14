import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';

@Component({
  selector: 'app-activity-steps',
  templateUrl: './activity-steps.page.html',
})
export class ActivityStepsPage implements OnInit {
  public activity: Activity;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.activity = this.router.getCurrentNavigation().extras.state.activity;
      }
    });
  }

}
