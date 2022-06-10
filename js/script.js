'use strict';

void function() {

    const formSelector = '#form';
    const form = document.querySelector(formSelector);

    const searchInputs = element => {
        const data = element.querySelectorAll('input, textarea, select');
        return Array.from(data);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = searchInputs(event.target)
            .reduce((acc, input) => {
                acc[input.name] = input.value;
                return acc;
            }, {});


        localStorage.setItem(
            formSelector,
            JSON.stringify(data)
        );

        window.location.href = './../pages/list.html';
    }


    // const loadHandler = () => {
    //     const unparsedData = localStorage.getItem(formSelector);
    //     if(!unparsedData) return
    //
    //     const data = JSON.parse(unparsedData);
    //     searchInputs(form).forEach(input => input.value = data[input.name])
    // }

    form
        .addEventListener('submit', submitHandler)
    // document
    //     .addEventListener('DOMContentLoaded', loadHandler)

}()