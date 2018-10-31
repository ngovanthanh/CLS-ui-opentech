import { DoCheck, Injector, KeyValueDiffers, Renderer2 } from '@angular/core';
import { ComponentInjector } from './component-injector';
import { ComponentOutletInjectorDirective } from './component-outlet-injector.directive';
export interface AttributesMap {
    [key: string]: string;
}
export declare class DynamicAttributesDirective implements DoCheck {
    private renderer;
    private differs;
    private injector;
    private componentInjectorType;
    private componentOutletInjector;
    ndcDynamicAttributes: AttributesMap;
    ngComponentOutletNdcDynamicAttributes: AttributesMap;
    private _attrsDiffer;
    private _componentInjector;
    private _lastCompType;
    private _lastAttrActions;
    private readonly _attributes;
    private readonly _compInjector;
    private readonly _nativeElement;
    private readonly _compType;
    private readonly _isCompChanged;
    constructor(renderer: Renderer2, differs: KeyValueDiffers, injector: Injector, componentInjectorType: ComponentInjector, componentOutletInjector: ComponentOutletInjectorDirective);
    ngDoCheck(): void;
    setAttribute(name: string, value: string, namespace?: string): void;
    removeAttribute(name: string, namespace?: string): void;
    private _updateAttributes(actions);
    private _changesToAttrActions(changes);
}
