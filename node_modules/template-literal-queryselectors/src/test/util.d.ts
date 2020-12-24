export type Not<T> = Exclude<any, T>
export type Nullable<T extends Not<null>> = T | null;

/**
 * Note: `ElementTagNameMap` while depreciated is perfect for this testing
 */

/**
 *
 */
export type ElementTags<T extends keyof ElementTagNameMap> =
    T extends keyof HTMLElementTagNameMap ?
        HTMLElementTagNameMap[T] :
    T extends keyof SVGElementTagNameMap ?
        SVGElementTagNameMap[T] :
        never;

export type ElementTagsOrNull<T extends keyof ElementTagNameMap> =
    ElementTags<T> | null
