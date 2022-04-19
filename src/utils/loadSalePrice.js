function loadSalePrice(price, salePrice) {

    if (parseFloat(price) > parseFloat(salePrice)) {
        return true;
    } else if (parseFloat(price) <= parseFloat(salePrice)) {
        return false;
    }

}

module.exports= loadSalePrice;