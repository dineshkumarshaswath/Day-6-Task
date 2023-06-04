//class holds the all movie details.

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating 
//    as its arguments, and sets the respective class properties to these values.

class Movie{
    constructor(moviename,studio,rating){
        this.moviename=moviename;
        this.studio=studio;
        this.rating=rating;
}

  moviedetails(){
    console.log(
`The movie name is :  ${this.moviename}
This movie was produced by this : ${this.studio} studio
This movie rating : is ${this.rating}`);
     
  }


}
let movie1=new Movie( "AVATAR","Lightstorm Entertainment",  "PG-­13");
movie1.moviedetails();


// b) The constructor for the class Movie will set the class property rating to "PG" as default 
//    when no rating is provided.

class Ratingmovie{
constructor(moviename,studio,rating="PG-13"){
      this.moviename=moviename;
      this.studio=studio;
      this.rating=rating;
}

movieratingdetails(){
  console.log(
`The movie name is :  ${this.moviename}
This movie was produced by this : ${this.studio} studio
This movie rating : is ${this.rating}`);
   
}


}
let movie2=new Ratingmovie("Inception","Warner Bros.Pictures");
movie2.movieratingdetails();


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
//  You may assume the input array is full of Movie instances. The returned array need not be full.


class Latestmovie extends Movie{

  getPG(){
        console.log(`The movie name is ${this.moviename} and the rating is ${this.rating}`)
  }
}

let  latestmovie =new Latestmovie("Titanic",'paramount Pictures','PG-13')
latestmovie.getPG()




// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//  the studio “Eon Productions”, and the rating “PG­13”

class Hollywood{
  constructor(moviename,studio,rating){
      this.moviename=moviename;
      this.studio=studio;
      this.rating=rating;
}
   
}


let hollywoodmovie1=new Hollywood( "Casino Royale", "Eon Productions" ,"PG-­13");
console.log(hollywoodmovie1)
