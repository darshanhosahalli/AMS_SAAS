import { BaseEntity } from "typeorm";
import { Injectable, Scope, Optional, Inject } from "@nestjs/common";
import { OperationsEnum } from "./operation.enum";
import { CreateOperation } from "./CreateOperation";
import { Operation } from "./operation.interface";
import { UpdateOperation } from "./UpdateOperator";
import { DeleteOperation } from "./DeleteOperation";
import { GetAllOperation, GetOneOperation } from "./GetOperation";

@Injectable({ scope: Scope.REQUEST })
export class CRUDFactory<T extends BaseEntity> {

    @Optional()
    @Inject()
    private createOperation: CreateOperation<T>;

    @Optional()
    @Inject()
    private updateOperation: UpdateOperation<T>;

    @Optional()
    @Inject()
    private deleteOperation: DeleteOperation<T>;

    @Optional()
    @Inject()
    private getAllOperation: GetAllOperation<T>;

    @Optional()
    @Inject()
    private getOneOperation: GetOneOperation<T>;

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