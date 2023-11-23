export type company_t = "Fender" | "Gibson" | "Ibanez" | "Musicman" | "Steinberg";
export type madeIn_t = "USA" | "Japan" | "Mexico" | "Indonesia" | "Other";
export type condition_t = "Mint" | "New" | "Used" | "Relic" | "Not Functional";

export type guitar_t = {
    company: company_t;
    year: number;
    serial: string;
    model: string;
    madeIn: madeIn_t;
    condition: condition_t;
    details: boolean[];
};



function submitForm() {
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

}




