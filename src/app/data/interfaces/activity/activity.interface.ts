import { AbstractModel } from '../abstract-model/abstract-model.interface';
import { Objective } from './objective.interface';
import { Resource } from './resource.interface';

export interface Activity extends AbstractModel{
    type: string;
    name: string;
    recommendedAges: number[];
    minutes: number;
    imgLink: string;
    learningAreas: string[];
    objectives: Objective[];
    resources: Resource[];
    teacherRole: string;
    description: string[];
    variations: string[];
}
