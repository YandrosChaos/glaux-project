import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';
import { ActivityService } from '../../../../../data/services/activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss']
})
export class ActivityDetailPage implements OnInit, OnDestroy {
  private subActivity: Subscription
  public activity: Activity;

  constructor(
    private activityService: ActivityService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const activityId: string = this.activatedRoute.snapshot.paramMap.get('hash')
    this.subActivity = this.activityService.getById(activityId)
    .subscribe(
      (activity: Activity)=> {
        this.activity = activity;
        this.onNavigate('resume');
      }
    );
  }

  public onNavigate(tabName: string): void{
    const navExtras: NavigationExtras = {
      state: {
        activity: this.activity
      }
    }
    this.router.navigate(['/activity/detail', this.activity.hash, tabName], navExtras)
  }

  ngOnDestroy(){
    this.subActivity.unsubscribe();
  }

}
