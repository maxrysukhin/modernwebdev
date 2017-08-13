(function () {
    var mainPageItem = $('.mainpage__item'),
        mainPageList = $('.mainpage__list'),
        searchPageItem = $('.searchpage-item'),
        searchPageList = $('.searchpage__list');


    $.getJSON('assets/data/featured-products.json', function(products) {

        var items = products.items,
            mainClone,
            searchClone;

        mainPageItem.find('.mainpage__item-img').attr('src', items[0].thumb);
        mainPageItem.find('.mainpage__item-title').html(items[0].title);
        mainPageItem.find('.mainpage__item-description').html(items[0].description);

        searchPageItem.find('.searchpage-item__img').attr('src', items[0].thumb);
        searchPageItem.find('.searchpage-item__title').html(items[0].title);
        searchPageItem.find('.searchpage-item__description')
            .html("<b>Item's description:</b> " + items[0].description);
        searchPageItem.find('.item__time-left').html(items[0].timeleft + 'h left');
        searchPageItem.find('.item__watch-number').html(items[0].watchers);
        searchPageItem.find('.item__price-num').html(items[0].price);

        for (var i = 1; i < items.length; i++) {

            mainClone = mainPageItem.clone();
            searchClone = searchPageItem.clone();

            mainClone.find('.mainpage__item-img').attr('src', items[i].thumb);
            mainClone.find('.mainpage__item-title').html(items[i].title);
            mainClone.find('.mainpage__item-description').html(items[i].description);

            searchClone.find('.searchpage-item__img').attr('src', items[i].thumb);
            searchClone.find('.searchpage-item__title').html(items[i].title);
            searchClone.find('.searchpage-item__description')
                .html("<b>Item's description:</b> " + items[i].description);
            searchClone.find('.item__time-left').html(items[i].timeleft + 'h left');
            searchClone.find('.item__watch-number').html(items[i].watchers);
            searchClone.find('.item__price-num').html(items[i].price);

            mainPageList.append(mainClone);
            searchPageList.append(searchClone);
        }

    });

}());
