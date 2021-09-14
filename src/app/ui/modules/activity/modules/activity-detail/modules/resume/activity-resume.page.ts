import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';

@Component({
  selector: 'app-activity-resume',
  templateUrl: './activity-resume.page.html',
})
export class ActivityResumePage implements OnInit, OnDestroy {
  public activity: Activity;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ) { 
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.activity = this.router.getCurrentNavigation().extras.state.activity;
      }
    });
  }

  ngOnDestroy(){
  }

}
