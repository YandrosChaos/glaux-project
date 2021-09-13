import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';
import { ActivityService } from '../../../data/services/activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss']
})
export class ActivityPage implements OnInit {
  public activities: Activity[];

  constructor(
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.activityService.getAll().subscribe((list: Activity[]) => {
      this.activities = list;
    })
  }

}
