import { ModuleWithProviders, Type } from '@angular/core';
import { ComponentInjector } from './component-injector';
export declare class DynamicModule {
    static withComponents(components: Type<any>[], componentInjector?: Type<ComponentInjector>): ModuleWithProviders;
}
