declare namespace extension
{
    declare export namespace Prefs
    {
        type Accuracy =
            | 'accurate';

        type CustomType =
            | 'id'
    }

    type Command =
        | 'xml-img'
        | 'links'
        | 'images'
        | 'prefs'
        | 'directory'
        | 'progress'
        | 'close-me'
        | 'reload-me'
        | 'write-binary'
}

//#region lib.d.ts Extensions

declare interface IDBFactory
{
    // Bleeding edge
    databases?(): Promise<IDBDatabase[]>;
}

declare interface Window
{
    count?:    number;
    iframe?:   HTMLIFrameElement
    deep?:     number;
    accuracy?: extension.Prefs.Accuracy;
    calc?:     boolean;
    custom?:   extension.Prefs.CustomType;
}

declare interface EventTarget
{
    error?:  Error & string
    result?: MouseEvent
}

declare function isNaN(numberString: string): boolean

//#endregion lib.d.ts Extensions
