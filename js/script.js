/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do, than by the ones you did do.",
    source: "Mark Twain"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy"
  },
  {
    quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forrest Grump",
    year: 1994
  },
  {
    quote: "Love what is simple and beautiful. These are the essentials.",
    source: "Ralph Waldo Emerson",
    citation: "The Tao of Emerson the Tao of Emerson"
  },
  {
    quote: "Don't stay in bed, unless you can make money in bed.",
    source: "George Burns"
  }
];




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
var getQuote = Math.floor(Math.random() * (quotes.length) );
  return quotes[getQuote];
}





/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/


function printQuote() {
  var print = getRandomQuote();
  var theString = "";
   theString += "<p class= 'quotes'>" + print.quote + "</p>"
   theString += "<p class= 'source'>" + print.source + "</p>"
  
 if (print.citation !== true) {
     theString += "<p class='citation'>" + print.citation + "</p>"
   } else if (print.citation !== '') {
     theString += "";
   }
   if (print.year !== true) {
     theString += "<p class='year'>" + print.year + "</p>"
   } else if (print.year !== '') {
     theString += "";
   }
  

  document.getElementById("quote-box").innerHTML = theString;
}
printQuote();



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
