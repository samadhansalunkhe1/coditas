import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[customHover]'
})

export class MyAttributeDirective {
   constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'orange';
   }
}

import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[customHover]'
})

export class MyAttributeDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'orange';
    }
}