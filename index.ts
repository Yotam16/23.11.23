import { company_t, madeIn_t,condition_t, guitar_t, loadStock, saveStock } from "./foo.js";


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
    };

    console.log(guitarObj);

    const stock = loadStock();
    const updatedStock = [...stock, guitarObj];

    saveStock(updatedStock);

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




