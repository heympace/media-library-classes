/////////////////////////////////////////////////////
// MEDIA - parent class
/////////////////////////////////////////////////////

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

    // shared attributes across all
    get title() { return this._title; }
    get isCheckedOut() { return this._isCheckedOut; }
    get ratings() { return this._ratings; }
    
    set isCheckedOut(updStatus) {  
        if (typeof updStatus === 'boolean') {
        this._isCheckedOut = updStatus;
      }else {
        return console.log('Please specify as true or false.')
      }
    } 
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let ratings = this._ratings;
      let sum = ratings.reduce((p, c) => c += p);
      let avg = sum / ratings.length
         return avg.toFixed(1) // rounds number, including one decimal
    }
    
    addRating(addNew) {
      if (1 <= addNew <=5){
      this._ratings.push(addNew);  
      }else{
        return console.log('Please enter a rating between 1 and 5.')
      }
    }
  
  }
  
  // Book ///////////////////////////////////////////////////
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    
    get author() { return this._author; }
    get pages() { return this._pages; }
  } 
  
  // Movie ///////////////////////////////////////////////////
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    
    get director() { return this._director; }
    get runTime() { return this._runTime; }
  } 
  
  // cd ///////////////////////////////////////////////////
  
  class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    
    get artist() { return this._artist; }
    get songs() { return this._songs; }
  } // end CD class
  
  /////////////////////////////////////////////////////
  
  // create a book instance + test
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  // console.log(historyOfEverything);
  
  // toggle check out status + test
  historyOfEverything.toggleCheckOutStatus();
  // console.log(historyOfEverything.isCheckedOut);
  
  // add ratings + print avg to console
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  // console.log(historyOfEverything.getAverageRating());
  
  // create movie instance, toggle checkout, print status
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  // add ratings + print avg to console
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  /* TODO
  > Add more properties to each class (movieCast, songTitles, etc.)
  > Create a CD class that extends Media.
  > In .addRating(), make sure input is between 1 and 5.
  > Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
  > Create class called Catalog that holds all of the Media items in our library.
  */