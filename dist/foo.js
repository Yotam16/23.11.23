export function loadStock() {
    var existingStockJSON = localStorage.getItem('guitarstock');
    var existingStock = existingStockJSON ? JSON.parse(existingStockJSON) : [];
    console.log("stock loaded: ", existingStockJSON);
    return existingStock;
}
export function playClickSound() {
    var audio = new Audio("chime.wav");
    audio.play();
}
export function saveStock(stock) {
    var StockJSON = JSON.stringify(stock);
    localStorage.setItem('guitarstock', StockJSON);
    console.log("stock saved");
}
export function clearStock() {
    var emptyStock = [];
    localStorage.setItem('guitarstock', JSON.stringify(emptyStock));
    console.log("stock cleared:");
}
