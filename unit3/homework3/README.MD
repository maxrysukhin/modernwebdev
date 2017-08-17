1. Create ProductDetailsController that will handle user interactions on the Product Details page. Controller’s constructor
function should expect one parameter to be injected - product object. It will be resolved and provided by resolve function
registered for the route.
2. Create app/views/product.html file and add HTML markup that will implement UI as it shown in the Single Item.png
mockup provided in the handouts. Don not implement full-fledged image gallery with product’s thumbnails, just add a static
markup. Also Find More button shouldn’t display Search Form, we will implement it in next homework.
3. Add getProductById(productId) method for ProductService. Method should internally re-use one of the existing
methods (getFeaturedProducts() or find()), then filter collection of received products by product ID provided as an
argument. If a product is found it should be returned to the call site, otherwise reject the promise.
4. In app.js file add routing configuration for new Product Details page. The route’s path should contain :productId
parameter.
5. Add resolve object for the route to pre-fetch product from the server before the page is rendered. The same way we did on
resolve Example slide, but do not call $http service directly inject and re-use ProductService.getProductById method
implemented on step 3.