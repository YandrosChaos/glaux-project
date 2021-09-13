import { AbstractModel } from '../abstract-model/abstract-model.interface';
import { Objective } from './objective.interface';
import { Resource } from './resource.interface';

export interface Activity extends AbstractModel{
    name: string;
    recommendedAge: string;
    duration: number;
    learningAreas: string[];
    objectives: Objective[];
    resources: Resource[];
    teacherRole: string;
    description: string;
    variations: string[];
}
