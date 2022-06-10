"use strict";

void function () {

    const form = ('#form');
    const list = JSON.parse(localStorage.getItem(form));
    const ul = document.createElement('ul');

    for(let item in list){
        const li = document.createElement('li');

        if(list[item] === ''){
            list[item] = 'Нет данных';
            li.innerHTML = `${item} : ${list[item]}`;
        }else{
            li.innerHTML = `${item} : ${list[item]}`;
        }

        ul.append(li);
    }

    document.body.prepend(ul);

}();