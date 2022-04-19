const filterTitleOfProducts = require("./filterTitleOfProducts");

function findProducts(onSale, data, gender, title) {
    let result = data.length > 0 ? data : [];
    if (gender === "all gender" && data.length > 0) {
        if (onSale === true) {
            result = data.filter(item => parseFloat(item.price) > parseFloat(item.sale_price));
            return filterTitleOfProducts(title, result);
        } else {
            return filterTitleOfProducts(title, result);
        }
    } else if (gender !== "all gender" && data.length > 0) {
        if (onSale === true) {
            result = data.filter(item => parseFloat(item.price) > parseFloat(item.sale_price)).filter(item =>
                item.gender === gender);
            return filterTitleOfProducts(title, result);
        } else {
            result = data.filter(item =>
                item.gender === gender);
            return filterTitleOfProducts(title, result);
        }
    }
}

module.exports = findProducts;