import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/data/interfaces/activity/activity.interface';

@Component({
  selector: 'app-activity',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss']
})
export class ActivityDetailPage implements OnInit {
  public activity: Activity;

  constructor(
  ) { }

  ngOnInit() {
  }

}
