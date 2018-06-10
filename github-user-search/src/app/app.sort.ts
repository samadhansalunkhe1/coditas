import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(value: any[], args: string): any {
        if (args === 'nameAZ' || args === 'nameZA') {
            value.sort(function(a, b) {
                const nameA = a.login.toLowerCase(), nameB = b.login.toLowerCase();
                /* sort string ascending */
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                /* default return value (no sorting) */
                return 0;
            });

            if (args === 'nameAZ') {
                return value;
            } else if (args === 'nameZA') {
                return value.reverse();
            }
        } else if (args === 'nameAsc' || args === 'nameDsc') {
            value.sort(function(a, b) {
                return a.score - b.score;
            });
            if (args === 'nameAsc') {
                return value;
            } else if (args === 'nameDsc') {
                return value.reverse();
            }
        } else {
            return value;
        }
    }
}