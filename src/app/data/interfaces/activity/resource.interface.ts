import { AbstractModel } from '../abstract-model/abstract-model.interface';

export enum ResourceTypeEnum{
    material,
    human,
    spatial
}

export interface Resource extends AbstractModel{
    type: ResourceTypeEnum;
    description: string;
}
