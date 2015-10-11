To run the app: download all the files and open the index.html in your browser.
App will have the testing part at the bottom. Showing 7 specs and 0 failures.


The test in jasmine/spec/feedreader.js test the following:

RSS Feeds: 
•	tests to make sure that the allFeeds variable has been defined and that it is not empty
•	loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
•	loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

The menu:
•	tests that the menu element is hidden by default
•	tests that menu changes visibility when clicked on

Initial Entries:
•	ensures the loadFeed function is called and completes its work
•	tests that there is at least a single .entry element within the .feed container.

New Feed Selection:
•	test that ensures when a new feed is loaded by the loadFeed function that the content actually changes
