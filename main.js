/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {
  "use strict";
  var quotes = [
	  {
      quote: "The snow glows white on the mountain tonight. Not a footprint to be seen. A kingdom of isolation, and it looks like I'm the Queen.",
      originalAuthor: "Idina Menzel"
	  },
	  {
      quote: "Chocolate Rain. Some stay dry and others feel the pain.",
      originalAuthor: "Tay Zonday"
	  },
	  {
      quote: "He’s climbin’ in your windows, he’s snatchin’ your people up, tryin’ to rape ‘em. So y’all need to hide your kids, hide your wife, and hide your husband cause they’re rapin’ everybody out here.",
      originalAuthor: "Antoine Dodson"
	  },
	  {
      quote: "Oops, I did it again. I played with your hear, got lost in the game. Oh baby, baby.",
      originalAuthor: "Brittany Spears"
	  },
	  {
      quote: "Do you ever feel like a plastic bag, drifting through the wind, wanting to start again?",
      originalAuthor: "Katy Perry"
	  },
	  {
      quote: "I like big butts and I can not lie. You other brothers can't deny.",
      originalAuthor: "Sir Mix-a-lot"
	  },
	  {
      quote: "And keep talking that mess, that's fine, but could you walk and talk at the same time? And it's my name that's on that tag. So remove your bags, let me call you a cab.",
      originalAuthor: "Beyonce"
	  },
	  {
      quote: "She's just a girl, and she's on fire. Hotter than a fantasy, lonely like a highway. She's living in a world, and it's on fire. Feeling the catastrophe, but she knows she can fly away.",
      originalAuthor: "Alicia Keys"
	  },
	  {
      quote: "Rah rah ah-ah-ah! Ro mah ro-mah-mah Gaga oh-la-la! Want your bad romance.",
      originalAuthor: "Lady Gaga"
	  },
	  {
      quote: "I dreamed a dream in time gone by. When hope was high and life worth living.",
      originalAuthor: "Les Miserables"
	  },
	  {
      quote: "You better lose yourself in the music, the moment, you own it. You better never let it go. You only get one shot, do not miss your chance to blow. This opportunity comes once in a lifetime.",
      originalAuthor: "Eminem"
	  },
	  {
      quote: "I'm gonna swing from the chandelier. I'm gonna live like tomorrow doesn't exist! I'm gonna fly like a bird through the night,  feel my tears as they dry.",
      originalAuthor: "Sia"
	  },
	  {
      quote: "Do it! Just do it! Don't let your dreams be dreams. Yesterday you said tomorrow--just do it! Make your dreams come true.",
      originalAuthor: "Shia LaBeouf"
    },
	  {
      quote: "I know when that hotline bling, that can only mean one thing.",
      originalAuthor: "Drake"
	  }

  ];
  
  var randomNumber = Math.floor(Math.random() * quotes.length);

  $('#quoteButton').click(function (event) {

    event.preventDefault();
    
     randomNumber = Math.floor(Math.random() * quotes.length);
    
      var newQuote = quotes[randomNumber].quote,
      author = quotes[randomNumber].originalAuthor,
      quoteContainer = $('.quoteContainer');newQuote = quotes[randomNumber].quote,
      author = quotes[randomNumber].originalAuthor,
      quoteContainer = $('.quoteContainer');

    quoteContainer.fadeOut(500, function () {
      quoteContainer.html('');
      quoteContainer.append('<li class="fa fa-quote-left fa-lg" aria-hidden="true"></li> ' + newQuote + ' <li class="fa fa-quote-right fa-lg" aria-hidden="true"></li>' + '<p align="right" style="font-size: 30px; margin-right: 50px;"> - <strike>' + author + '</strike></p>');
         
        
      quoteContainer.fadeIn(500);
        
    });  
	});
  
  $('#tweetButton').click(function (e) {

    e.preventDefault();
    
      var newQuote = quotes[randomNumber].quote,
      author = quotes[randomNumber].originalAuthor,
      textToTweet = String(newQuote + " -" + author),
      twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
    window.open(twtLink, '_blank');
    
  
  });

});


