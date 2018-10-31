import { ComponentFactoryResolver, DoCheck, Injector, KeyValueChanges, KeyValueDiffers, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ComponentInjector } from './component-injector';
import { ComponentOutletInjectorDirective } from './component-outlet-injector.directive';
export declare type IOMapInfo = {
    propName: string;
    templateName: string;
};
export declare type IOMappingList = IOMapInfo[];
export declare type KeyValueChangesAny = KeyValueChanges<any, any>;
export declare class DynamicDirective implements OnChanges, DoCheck, OnDestroy {
    private _differs;
    private _injector;
    private _cfr;
    private _componentInjectorType;
    private _componentOutletInjector;
    ndcDynamicInputs: {
        [k: string]: any;
    };
    ngComponentOutletNdcDynamicInputs: {
        [k: string]: any;
    };
    ndcDynamicOutputs: {
        [k: string]: Function;
    };
    ngComponentOutletNdcDynamicOutputs: {
        [k: string]: Function;
    };
    private _componentInjector;
    private _lastComponentInst;
    private _lastInputChanges;
    private _inputsDiffer;
    private _compFactory;
    private _outputsShouldDisconnect$;
    private readonly _inputs;
    private readonly _outputs;
    private readonly _compInjector;
    private readonly _compRef;
    private readonly _componentInst;
    private readonly _componentInstChanged;
    constructor(_differs: KeyValueDiffers, _injector: Injector, _cfr: ComponentFactoryResolver, _componentInjectorType: ComponentInjector, _componentOutletInjector: ComponentOutletInjectorDirective);
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    updateInputs(isFirstChange?: boolean): void;
    bindOutputs(): void;
    notifyOnInputChanges(changes: SimpleChanges, forceFirstChanges: boolean): void;
    private _disconnectOutputs();
    private _getInputsChanges(inputs);
    private _updateInputChanges(differ);
    private _collectFirstChanges();
    private _collectChangesFromDiffer(differ);
    private _inputsChanged(changes);
    private _outputsChanged(changes);
    private _resolveCompFactory();
    private _updateCompFactory();
    private _resolveInputs(inputs);
    private _resolveOutputs(outputs);
    private _resolveChanges(changes);
    private _remapIO(io, mapping);
    private _findPropByTplInMapping(tplName, mapping);
}
