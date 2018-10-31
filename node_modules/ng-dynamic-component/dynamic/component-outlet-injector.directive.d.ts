import { NgComponentOutlet } from '@angular/common';
import { ComponentRef } from '@angular/core';
import { ComponentInjector } from './component-injector';
export declare class ComponentOutletInjectorDirective implements ComponentInjector {
    private componentOutlet;
    readonly componentRef: ComponentRef<any>;
    constructor(componentOutlet: NgComponentOutlet);
}
