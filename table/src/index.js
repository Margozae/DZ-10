'use strict';

function foo (limit) {
    const table = document.createElement('table');
    document.body.prepend(table);
    for (let i = 0; i < limit; i++) {
        const tr = document.createElement('tr');
        table.append(tr);
        for (let j = 1; j <= limit; j++) {
            const td = document.createElement('td');
            tr.append(td);
            td.style.border = '1px solid #000000';
            td.style.padding = '20px';
            td.append(j + i * limit);
        }
    }
}

foo(10); // eslint-disable-line 
