const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const prices = {
    "shirt": 9.99
}
document.getElementById("product").value = urlParams.get("product")
document.getElementById("color").value = urlParams.get("color")
document.getElementById("price").textContent = prices[urlParams.get("product")]
if (prices[urlParams.get("product")] === undefined) {
    document.getElementById("price-with-label").textContent = "product not found!";
}