function submitForm() {
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
    var guitarData = {
        company: company,
        year: year,
        serial: serial,
        model: model,
        madeIn: madeIn,
        condition: condition,
        details: details
    };
    console.log(guitarData);
}
