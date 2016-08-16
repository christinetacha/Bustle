import Ember from 'ember';

var stories = [{
  id: 1,
  headline: "GoT Season 7",
  author: "John Snow",
  category: "TV",
  image: "http://pixel.nymag.com/imgs/daily/vulture/2015/09/15/15-kit-harington-got-snow.w529.h529.jpg"
}, {
  id: 2,
  headline: "Pandora has thumbprint station",
  author: "Some Person",
  category: "Music",
  image: "https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/pandora-128.png"
}, {
  id: 3,
  headline: "Chris Pratt is hilarious",
  author: "Chris Pratt",
  category: "Social Media",
  image: "http://ia.media-imdb.com/images/M/MV5BNzg3MTgwOTgzMV5BMl5BanBnXkFtZTgwODIxMTUwMjE@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
}];

export default Ember.Route.extend({
  model() {
    return stories;
  },
});
