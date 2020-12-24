///<reference path="../index.d.ts"/>

//#region Iteration

/**
 * Test iteration
 */
[...document.querySelectorAll('a > div[class^=hljs]')]
    .forEach((div: HTMLDivElement) => {
        div.align /* Depreciated, but should exist. */
    });

[...document.querySelectorAll('a > a[class^=hljs]')]
    // @ts-expect-error (Incorrect parameter type, expects 'a' tag / HTMLAnchorElement)
    .forEach((div: HTMLDivElement) => {
        div.align /* Depreciated, but should exist. */
    });

[...document.querySelectorAll('a > a[class^=hljs]')]
    .forEach((div) => {
        // @ts-expect-error (align does not exist on 'a' tag / HTMLAnchorElement)
        div.align /* Depreciated, but should exist. */
    });

//#endregion Iteration
