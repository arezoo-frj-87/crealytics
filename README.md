# Getting Started with Crealytics
The general idea of this coding challenge is to implement a basic auto-complete list which will be updated dynamically while the user types in a search box. The result will be comprised of products containing information like title, price and a couple of images.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Frontend - client
As mentioned above, the frontend is implemented using React with javaScript and Material-UI.
To start the application, run the following commands:

```
npm install
npm start
```

To start the application, run the following commands:
```
npm test
```

Src structure is as follows

### __test__

**components**- includes test files for each components.

**utils**- include test file for utils.

### Components

**Catalog**- this component has 2 part ,the first part includes (searchbox,check box for sale price, drop down for diffrent gender) and the second one is **ProductGrid** .

**ProductGrid**- this component displays **ProductCard** according to the data and _pagination_ at the bottom of page.

**ProductCard**- this component displays cards fo product, each card has **Image**, title, gtin, gender, price and sale price and if the sale price is less than the main price,
                 the sale price will be displayed on a card.by click on each card **DetailsDialog** will be open to showing more image.

**Image**- this component gets the image URL and if the image does not exist it will be added place-holder image instead of the product image.

**DetailsDialog**- this component get additional-image-link from **ProductCard** and displays one dialog box with additional image.


### utils

**filterTitleOfProducts** -
**findProducts** -
**loadSalePrice** -
**useFetch** - it is a custom hook to get data from csv file, it contain _removeDuplication_ function to delete our data duplication. _I figured out the CSV file contains duplication data so I decided to remove it after fetching data_.


### style

**style.css** - it contains some styling code for components and media queries.