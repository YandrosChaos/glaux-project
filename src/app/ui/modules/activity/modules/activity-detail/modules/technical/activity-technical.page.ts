import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';

@Component({
  selector: 'app-activity-technical',
  templateUrl: './activity-technical.page.html',
  styleUrls: ['./activity-technical.page.scss']
})
export class ActivityTechnicalPage implements OnInit {
  public activity: Activity;

  public get formattedRecommendedAges(): string {
    if (this.activity && this.isOnlyOneRecommendedAge()) {
      return this.activity?.recommendedAges[0] + " años";
    } else if (this.activity && !this.isOnlyOneRecommendedAge()) {
      return this.activity?.recommendedAges[0] 
      + ' a ' 
      + this.activity?.recommendedAges[this.activity?.recommendedAges.length - 1]
      + ' años';
    } else {
      return 'Todas las edades';
    }
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.activity = this.router.getCurrentNavigation().extras.state.activity;
      }
    });
  }

  private isOnlyOneRecommendedAge(): boolean {
    return this.activity?.recommendedAges.length > 0;
  }

}
