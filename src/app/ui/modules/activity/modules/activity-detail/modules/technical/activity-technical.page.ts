import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';

@Component({
  selector: 'app-activity-technical',
  templateUrl: './activity-technical.page.html',
  styleUrls:['./activity-technical.page.scss']
})
export class ActivityTechnicalPage implements OnInit {
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
