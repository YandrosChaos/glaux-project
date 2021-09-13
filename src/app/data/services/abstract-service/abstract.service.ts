import { Observable } from 'rxjs';

export interface AbstractService<T>{
    endpoint: string;
    getById(id: string): Observable<T>;
    getAll(): Observable<T[]>;
    create(item: T): void;
    update(item: T): void;
    delete(id: string): void;
    holyGranade(): void;
}
