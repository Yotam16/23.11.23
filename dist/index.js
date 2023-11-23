function submitForm() {
    const company = document.getElementById('company').value;
    const year = parseInt(document.getElementById('year').value, 10);
    const serial = document.getElementById('serialNumber').value;
    const model = document.getElementById('modelName').value;
    const madeIn = document.getElementById('madeIn').value;
    const condition = document.getElementById('condition').value;
    const originalParts = document.getElementById('originalParts').checked;
    const limitedEdition = document.getElementById('limitedEdition').checked;
    const discontinued = document.getElementById('discontinued').checked;
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
}
