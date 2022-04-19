function filterTitleOfProducts(value, data) {
    let result = data;
    if (value.length > 0 && data.length > 0) {
        result = data.filter(item => item.title.toUpperCase().includes(value.toUpperCase()));
    }
        result.sort((a, b) => parseFloat(a.sale_price) - parseFloat(b.sale_price));
        return result;

}

module.exports = filterTitleOfProducts;