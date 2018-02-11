// getting json request for quotes from Forismatic API https://forismatic.com/en/api/
// done function only executes after the json data has been fetched 

$(document).ready(function(){
  var quote 
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', function(data){
  	quote = data; 
  })

  .done(function(){
  	// set html as quote data
  	$("#quote_text").html(quote.quoteText);  
  	$("#quote_author").html("-" + quote.quoteAuthor);
  	// update twitter link
  	var encoded_quote = encodeURI(quote.quoteText); 
  	var encoded_author = encodeURI("-" + quote.quoteAuthor); 
  	var url = "https://twitter.com/intent/tweet?text=" + encoded_quote + "%20%20" + encoded_author;  
  	$("#twitter_link").attr("href", url); 



  }); 

  $("#new_quote_btn").click(function(){
    // load new quote
	  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', function(data){
	  	quote = data; 
	  })

	  .done(function(){
  		// set html as quote data
  		$("#quote_text").html(quote.quoteText);  
  		$("#quote_author").html("-" + quote.quoteAuthor);
  		// update twitter link
  		  var encoded_quote = encodeURI(quote.quoteText); 
		  var encoded_author = encodeURI("-" + quote.quoteAuthor); 
		  var url = "https://twitter.com/intent/tweet?text=" + encoded_quote + "%20%20" + encoded_author;  
		  $("#twitter_link").attr("href", url); 
  	}); 

  });


});