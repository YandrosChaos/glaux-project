import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';
import { ActivityService } from '../../../data/services/activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss']
})
export class ActivityPage implements OnInit, OnDestroy {
  private subActivity: Subscription

  public activities: Activity[];

  constructor(
    private activityService: ActivityService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subActivity = this.activityService.getAll().subscribe((list: Activity[]) => {
      this.activities = list;
    })
  }

  public onNavigate(activity: Activity):void{
    this.router.navigate(['/activity/detail', activity.hash])
  }

  ngOnDestroy(){
    this.subActivity.unsubscribe();
  }

}
