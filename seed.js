// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var books_list = [
  {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
  releaseDate: "July 11, 1960"
  },
  {
  title: "The Great Gatsby",
  author: "F Scott Fitzgerald",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
  releaseDate: "April 10, 1925"
  },
  {
  title: "Les Miserables",
  author: "Victor Hugo",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
  releaseDate: "Unknown 1862"
  },
  {
  title: "Around the World in 80 Days",
  author: "Jules Verne",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
  releaseDate: "January 30, 1873"
  },
  {
  title: "Lean In",
  author: "Sheryl Sandberg",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
  releaseDate: "March 11, 2013"
  },
  {
  title: "The Four Hour Workweek",
  author: "Tim Ferriss",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
  releaseDate: "April 1, 2007"
  },
  {
  title: "Of Mice and Men",
  author: "John Steinbeck",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
  releaseDate: "Unknown 1937"
  },
  {
  title: "Romeo and Juliet",
  author: "William Shakespeare",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
  releaseDate: "Unknown 1597"
  }
];

var myProfile = {
    name: 'ryan',
    githubLink: 'https://github.com/rhamill1',
    githubProfileImage: 'https://avatars1.githubusercontent.com/u/21372834?v=3&s=466',
    personalSiteLink: 'cffmerchants.com',
    currentCity: 'Oakland',
    pets: []
}

// remove all records that match {} -- which means remove ALL records
db.Book.remove({}, function(err, books){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all books');

    // create new records based on the array books_list
    db.Book.create(books_list, function(err, books){
      if (err) { return console.log('err', err); }
      console.log("created", books.length, "books");
      process.exit();
    });
  }
});

db.Profile.remove({}, function(err, profile){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all books');

    db.Profile.create(myProfile, function(err, profile){
      if (err) { return console.log('err', err); }
      console.log("created", profile.length, "profile");
      process.exit();
    });
  }
});
