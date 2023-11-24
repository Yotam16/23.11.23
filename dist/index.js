var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { loadStock, saveStock } from "./foo.js";
export function submitForm() {
    var company = document.getElementById('company').value;
    var year = parseInt(document.getElementById('year').value, 10);
    var serial = document.getElementById('serialNumber').value;
    var model = document.getElementById('modelName').value;
    var madeIn = document.getElementById('madeIn').value;
    var condition = document.getElementById('condition').value;
    var originalParts = document.getElementById('originalParts').checked;
    var limitedEdition = document.getElementById('limitedEdition').checked;
    var discontinued = document.getElementById('discontinued').checked;
    var details = [originalParts, limitedEdition, discontinued];
    var guitarObj = {
        company: company,
        year: year,
        serial: serial,
        model: model,
        madeIn: madeIn,
        condition: condition,
        details: details
    };
    console.log(guitarObj);
    var stock = loadStock();
    var updatedStock = __spreadArrays(stock, [guitarObj]);
    saveStock(updatedStock);
}
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            submitForm();
        });
    }
});
