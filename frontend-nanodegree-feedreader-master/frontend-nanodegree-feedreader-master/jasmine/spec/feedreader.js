/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('url is defined and not an empty string', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty
         */

         it('name is defined and not an empty string', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* A test that ensures the menu element is
         * hidden by default.
         *----->Checking if body has a class of ‘menu-hidden’ 
         *that hides the menu.
         */
        var body = $('body');

        it('element is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * haves two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        var menuIconLink = $('.menu-icon-link');

        it('element changes visibilit on click', function() {
            menuIconLink.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();
            menuIconLink.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work.*/

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* There is at least a single .entry element within the .feed container.
         */

        it('has at least a single entry', function() {
            var entries = $('.feed').find('.entry');
            expect(entries.length >= 1).toBeTruthy();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function and that the content actually changes.*/
        var first; 
        var change;

        beforeEach(function(done) {

            /*Load first feed and set the value of variable first 
             *to the feed title
             */
            loadFeed(0, function() {
                first =  $('.feed').html();

                /*Load the second feed and set the value of variable 
                 *change to the feed title
                 */
                loadFeed(1, function(){
                    change = $('.feed').html();
                    done();
                });
            });
        });

        /*Compare the value of variable first and change, they 
         *need to be different.
         */
        it('content is changed', function(done) {
            expect(first !== change).toBeTruthy();
            done();
        });
    });
}());
