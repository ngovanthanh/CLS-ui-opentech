import { ComponentRef, InjectionToken } from '@angular/core';
export interface ComponentInjector {
    componentRef: ComponentRef<any> | null;
}
export declare const COMPONENT_INJECTOR: InjectionToken<ComponentInjector>;
