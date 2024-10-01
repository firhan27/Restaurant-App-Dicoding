Feature('Liking Unliking Restoran');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('like', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.scrollTo('#mainContent');
  I.wait(2);
  I.amOnPage('/');
  I.scrollTo('#mainContent');
  I.wait(2);
  I.click(locate('.restaurant-item').first());
  I.scrollTo('#mainContent');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.scrollTo('#mainContent');
  I.wait(2);
});

Scenario('unlike', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.scrollTo('#mainContent');
  I.wait(2);
  I.amOnPage('/');
  I.scrollTo('#mainContent');
  I.wait(2);
  I.click(locate('.restaurant-item').first());
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.scrollTo('#mainContent');
  I.wait(2);
  I.click(locate('.restaurant-name').first());
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.wait(2);
});
