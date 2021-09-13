import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Activity } from '../../interfaces/activity/activity.interface';
import { AbstractService } from '../abstract-service/abstract.service';
import { testData } from '../../database/test-data';

@Injectable({
    providedIn: 'root'
})
export class ActivityService implements AbstractService<Activity>{
    constructor() { }
    endpoint: string;

    getById(id: string): Observable<Activity> {
        return of(testData.find((item: Activity) => item.hash === id));
    }

    getAll(): Observable<Activity[]> {
        return of(testData);
    }

    create(item: Activity): void {
        item.hash = String(Math.random());
        testData.push(item)
    }

    update(item: Activity): void {
        const index: number = testData.findIndex((searchingItem: Activity) => searchingItem.hash === item.hash)
        if (index > -1) {
            testData[index] = item
        } else {
            console.log('Item not found!');
        }
    }

    delete(id: string): void {
        const index: number = testData.findIndex((searchingItem: Activity) => searchingItem.hash === id)
        if (index > -1) {
            testData.splice(index, 1)
        } else {
            console.log('Item not found!');
        }
    }

    holyGranade(): void {
        testData.splice(0, testData.length)
    }
}