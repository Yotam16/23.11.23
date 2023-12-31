import { company_t, madeIn_t,condition_t, guitar_t, loadStock, saveStock, clearStock } from "./foo.js";


export function submitForm() {
    const company = (document.getElementById('company') as HTMLSelectElement).value as company_t;
    const year = parseInt((document.getElementById('year') as HTMLInputElement).value, 10);
    const serial = (document.getElementById('serialNumber') as HTMLInputElement).value;
    const model = (document.getElementById('modelName') as HTMLInputElement).value;
    const madeIn = (document.getElementById('madeIn') as HTMLSelectElement).value as madeIn_t;
    const condition = (document.getElementById('condition') as HTMLSelectElement).value as condition_t;
    const originalParts = (document.getElementById('originalParts') as HTMLInputElement).checked;
    const limitedEdition = (document.getElementById('limitedEdition') as HTMLInputElement).checked;
    const discontinued = (document.getElementById('discontinued') as HTMLInputElement).checked;

    const details = [originalParts, limitedEdition, discontinued];

    const guitarObj = {
        company,
        year,
        serial,
        model,
        madeIn,
        condition,
        details
    } as guitar_t;

    console.log(guitarObj);

    const stock = loadStock();
    const updatedStock = [...stock, guitarObj];

    saveStock(updatedStock);

}

export function printStock() {

    const stock: guitar_t[] = loadStock();
    const listContainer = document.getElementById('listContainer');
    const ul = document.createElement('ul');
    
    if (listContainer) {
    
        for (const guitar of stock) {
            const li = document.createElement('li');
            li.textContent = `${guitar.company} ${guitar.model} #${guitar.serial}, made in ${guitar.year}. Condition is ${guitar.condition}`;
            ul.appendChild(li);
        }
    
    } else {

        const li = document.createElement('li');
        li.textContent = 'There are currently no guitars in stock!';
        ul.appendChild(li);
    }

    listContainer?.appendChild(ul);

}



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            submitForm();
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {

    if (document.getElementById('listContainer')) {
    
        console.log('loading printStock(), if you are not on the list page you should not see this');
        printStock();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const clearStockButton = document.getElementById('clearStock');

    if (clearStockButton) {
        clearStockButton.addEventListener('click', function() {
            clearStock();
            console.log("stock cleared");
        });
    }
});








