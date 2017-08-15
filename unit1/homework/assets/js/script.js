(function() {
    console.log("Hello!");

    var searchPageIsActive = false,
        mainpage = $('.mainpage'),
        searchpage = $('.searchpage'),
        searchBtn = $('.search-button'),
        homeLink = $('.home-link');

    searchBtn.on('click', function (e) {
        e.preventDefault();

        if (!searchPageIsActive) {
            mainpage.css("display", "none");
            searchpage.css("display", "block");
            searchPageIsActive = true;
        }

        console.log('search');
    });

    homeLink.on('click', function (e) {
        e.preventDefault();

        if (searchPageIsActive) {
            mainpage.css("display", "block");
            searchpage.css("display", "none");
            searchPageIsActive = false;
        }
    })

})();