import { AbstractModel } from '../abstract-model/abstract-model.interface';

export enum ObjectiveTypeEnum{
    procedural,
    conceptual,
    attitudinal
}
export interface Objective extends AbstractModel{
    type: ObjectiveTypeEnum;
    description: string;
}
