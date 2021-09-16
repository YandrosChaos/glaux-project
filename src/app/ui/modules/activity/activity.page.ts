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
  private subActivity: Subscription;

  private activities: Activity[];
  public filteredActivities: Activity[];
  public isSearching: boolean = false;

  constructor(
    private activityService: ActivityService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subActivity = this.activityService.getAll().subscribe((list: Activity[]) => {
      this.activities = list;
      this.filteredActivities = list
    })
  }

  public onSearchButtonTouched(): void {
    this.isSearching = !this.isSearching;
  }

  public onSearchValueChanged(item: string): void {
    const inputValue: string = this.transformInputValue(item);
    this.filteredActivities = this.activities.filter(
      (activity: Activity) =>
        this.transformInputValue(activity.name)
          .includes(inputValue)
        || this.transformInputValue(activity.type)
          .includes(inputValue)
    );
  }

  public onNavigate(activity: Activity): void {
    this.router.navigate(['/activity/detail', activity.hash])
  }

  ngOnDestroy() {
    this.subActivity.unsubscribe();
  }

  private transformInputValue(value: string): string {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
  }

}
