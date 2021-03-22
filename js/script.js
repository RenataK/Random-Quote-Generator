/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
  An array of quote objects have been created to generate random quotes below in a web browser.
  Some (not all) quotes include year and citation.
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
    citation: "The Tao of Emerson"
  },
  {
    quote: "Don't stay in bed, unless you can make money in bed.",
    source: "George Burns"
  }
];

/***
  A `getRandomQuote` function was created to store a random number and return
   a random quote object from the quotes array.
***/

function getRandomQuote() {
var getQuote = Math.floor(Math.random() * (quotes.length) );
  return quotes[getQuote];
}

/***
  This function generates a random quote onto the page when the "Show Another Quote" is clicked.
  Random quotes will appear on the web browser with a year and citation (if assigned).

***/


function printQuote() {
  var print = getRandomQuote();
  var theString = "";
   theString += "<p class= 'quote'>" + print.quote + "</p>"
   theString += "<p class= 'source'>" + print.source;

   if (print.citation) {
     theString += "<span class='citation'>" + print.citation + "</span>"
   }

   if (print.year) {
     theString += "<span class='year'>" + print.year + "</span>"
   }
"</p>"


  document.getElementById("quote-box").innerHTML = theString;
}
printQuote();



/***
  The "Show another quote" button trigges the event listener
  below and will call on the 'printQuote' function.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
