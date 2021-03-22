import { Injectable, Scope } from '@nestjs/common';
import { BaseEntity } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class CrudService<T extends BaseEntity> {
    getOperation() {
        console.log('get operation called');
    }
}
