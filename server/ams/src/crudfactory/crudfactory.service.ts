import { Injectable, Scope, Inject } from '@nestjs/common';
import { BaseEntity } from 'typeorm';
import { OperationsEnum } from './enums/operations.enum';
import { CreateRecord } from './create.service';
import { Operation } from './interface/operations.interface';
import { UpdateRecord } from './update.service';
import { DeleteRecord } from './delete.service';
import { GetRecords } from './get.service';

/** uses Factory Pattern
 * factory class to get respective operation class
 */
@Injectable({ scope: Scope.REQUEST})
export class CrudfactoryService<T extends BaseEntity> {

    /**
     * Create stargetgy
     */
    @Inject(CreateRecord)
    private createOperation: CreateRecord<T>;

    /**
     * Update stargetgy
     */
    @Inject(UpdateRecord)
    private updateOperation: UpdateRecord<T>;

    /**
     * delete stargetgy
     */
    @Inject(DeleteRecord)
    private deleteOperation: DeleteRecord<T>;
    
    /**
     * get stargetgy
     */
    @Inject(GetRecords)
    private getAllOperation: GetRecords<T>;

    /**
     * getOne stargetgy
     */
    @Inject(GetRecords)
    private getOneOperation: GetRecords<T>;
    
    /**
     * Method to get the respective operation
     * @param operation specifies one of the CRUD operation
     * @returns the one of the CRUD operatons
     */
    getOperation(operation: OperationsEnum): Operation<T> {
        switch(operation) {
            case OperationsEnum.Create:
                return this.createOperation;
            case OperationsEnum.Update:
                return this.updateOperation;
            case OperationsEnum.Delete:
                return this.deleteOperation;
            case OperationsEnum.Get:
                return this.getAllOperation;
            case OperationsEnum.GetOne:
                return this.getOneOperation;
        }
    }
}
