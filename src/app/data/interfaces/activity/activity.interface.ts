import { AbstractModel } from '../abstract-model/abstract-model.interface';
import { Objective } from './objective.interface';
import { Resource } from './resource.interface';
import { Step } from './step.interface';

export interface Activity extends AbstractModel{
    type: string;
    name: string;
    methodology: ActivityMethodologyEnum,
    recommendedAges: number[];
    minutes: number;
    imgLink: string;
    learningAreas: string[];
    objectives: Objective[];
    resources: Resource[];
    teacherRole: string;
    description: string[];
    steps: Step[];
    variations: string[];
}

export enum ActivityMethodologyEnum{
    guided = "Dirigida",
    semiGuided = "Semi-dirigida",
    noGuided = "No Dirigida"
}
