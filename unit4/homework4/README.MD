1. Implement following Search Form validation rules:
    - Product title should be at least 3 characters long
    - Max Auction Close Day shouldn’t be less than the current date.
    - Number of Bids should be positive value
3. Improve Search Form integration into the app:
    - Add data binding for search form fields.
    - When you navigate from the Search page to the Product Details page all the Search Form fields persist their values on
the form. (Hint: since services are singletons you can use them to share the data among controllers).
    - When you click “Find More” button on the Search Page, search criteria (form field values) should be reflected in the
browser’s address bar as query string. So you can copy the link and use it to open Search Page at the same state in a
different browser’s tab.
    - When either Search Page of Product Page are opened, Search form fields should be pre-populated with the values from
the query string.
    - When you click “Find More” button on the Product Details page, user should be navigated to the Search Page and all
the search criteria should be reflected in the address bar as query string.
    - Search criteria should be passed as JavaScript object to ProductService.find() method.
    - When users click Search button in the Navigation Bar, they should be navigated to the Search Page, and Title input field
in the Search Form should be pre-populated with the value from Navabar’s input.
4. Extra challenge: add grunt plugin html2js (https://www.npmjs.org/package/grunt-html2js) to combine all the views in a single JS
file and register them inside AngularJS $templateCache, so all of the will be loaded along with index.html page.