import { ComponentInjector } from './component-injector';
import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injector, OnChanges, Provider, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
export declare class DynamicComponent implements OnChanges, ComponentInjector {
    private _vcr;
    private _cfr;
    ndcDynamicComponent: Type<any>;
    ndcDynamicInjector: Injector;
    ndcDynamicProviders: Provider[];
    ndcDynamicContent: any[][];
    ndcDynamicCreated: EventEmitter<ComponentRef<any>>;
    componentRef: ComponentRef<any> | null;
    constructor(_vcr: ViewContainerRef, _cfr: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    createDynamicComponent(): void;
    private _resolveInjector();
}
