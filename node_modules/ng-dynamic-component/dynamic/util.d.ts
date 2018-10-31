import { KeyValueChangeRecord, SimpleChange, SimpleChanges } from '@angular/core';
export declare type KeyValueChangeRecordAny = KeyValueChangeRecord<any, any>;
export declare function createNewChange(val: any): SimpleChange;
export declare function recordToChange(record: KeyValueChangeRecordAny, isFirstChange?: boolean): SimpleChange;
export declare function setChangeFromRecord(isFirstChanges: boolean, setter: (record: KeyValueChangeRecordAny, change: SimpleChange) => void): (record: KeyValueChangeRecord<any, any>) => void;
export declare const defaultOpts: {
    isFirstChanges: boolean;
    onlyNewChanges: boolean;
};
export declare type DefaultOpts = Partial<typeof defaultOpts>;
export declare function changesFromRecord(opts?: DefaultOpts): (changes: SimpleChanges) => (record: KeyValueChangeRecord<any, any>) => void;
