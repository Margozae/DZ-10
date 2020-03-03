'use strict';

function generateList(arr) {
    const ul = document.createElement('ul');
    document.body.prepend(ul);
    for(let i=0; i < arr.length; i++) {
        if (typeof(arr[i]) !== 'object') {
            const li = document.createElement('li');
            li.append(arr[i]);
            ul.append(li);
        } else if (typeof(arr[i]) === 'object') {
            const item = arr[i];
            const li = document.createElement('li');
            const innerUl = document.createElement('ul');
            li.append(innerUl);
            ul.append(li);
            for(let j = 0; j < item.length; j++) {
                const innerli = document.createElement('li');
                innerli.innerText = item[j];
                innerUl.append(innerli);
            }
        }
    }
}

generateList([1, 2, [1.1,1.2,1.3], 3]);   // eslint-disable-line 
