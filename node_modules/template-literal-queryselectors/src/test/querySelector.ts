///<reference path="../index.d.ts"/>

import type { Not, Nullable, ElementTags, ElementTagsOrNull } from './util'


//#region New Tests

const div:       HTMLDivElement        = document.querySelector('a > div')!;
const divOrNull: HTMLDivElement | null = document.querySelector('a > div');

//@ts-expect-error (Selector is for 'a' tag / HTMLAnchorElement)
const not_div:       HTMLDivElement        = document.querySelector('a > a')!;
//@ts-expect-error (Not null is not asserted)
const not_divOrNull: HTMLDivElement = document.querySelector('a > div');

//#endregion New Tests

//#region Playground tests, extended

const querySelector: ParentNode['querySelector']  = document.querySelector.bind(document)

const aOrNull: ElementTagsOrNull<'a'>             = querySelector('div.banner > a.call-to-action');
const a:       ElementTags<'a'>                   = querySelector('div.banner > a.call-to-action')!;
const bOrNull: ElementTagsOrNull<'input' | 'div'> = querySelector('input, div');
const b:       ElementTags<'input' | 'div'>       = querySelector('input, div')!;
const cOrNull: ElementTagsOrNull<'circle'>        = querySelector('circle[cx="150"]');
const c:       ElementTags<'circle'>              = querySelector('circle[cx="150"]')!;
const dOrNull: ElementTagsOrNull<'button'>        = querySelector('button#buy-now');
const d:       ElementTags<'button'>              = querySelector('button#buy-now')!;
const eOrNull: ElementTagsOrNull<'p'>             = querySelector('section p:first-of-type');
const e:       ElementTags<'p'>                   = querySelector('section p:first-of-type')!;

//#endregion Playground tests, extended
