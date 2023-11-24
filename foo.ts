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


export function loadStock() {
    const existingStockJSON = localStorage.getItem('guitarstock');
    const existingStock: guitar_t[] = existingStockJSON ? JSON.parse(existingStockJSON) : [];
    console.log("stock loaded: ",existingStockJSON);
    return existingStock;
}


export function playClickSound() {

    const audio = new Audio("chime.wav");
    audio.play();
}

export function saveStock(stock: guitar_t[]) {
    const StockJSON = JSON.stringify(stock);
    localStorage.setItem('guitarstock', StockJSON);
    console.log("stock saved");
}

