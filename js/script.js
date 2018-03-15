// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Some",
	"artist":"Steve Lacy",
	"mp3Url":"https://open.spotify.com/album/4POiurFeB5bDsF9yBwOxbh",
	"imageUrl":"https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fcfcfadff10b7429caf30257cfa3b00f3.500x500x1.jpg",
	"songRating": "4/5"
}

var myPlayList = [
	{
		"title":"Skyline To",
		"artist":"Frank Ocean",
		"mp3Url":"https://open.spotify.com/track/4xR3MAscflQ262kMeiKshQ",
		"imageUrl":"https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fccc0894094b9a3cbb47a45ec0c69b1f0.1000x1000x1.jpg",
	},
	{
		"title":"Some",
	"artist":"Steve Lacy",
	"mp3Url":"https://open.spotify.com/album/4POiurFeB5bDsF9yBwOxbh",
	"imageUrl":"https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fcfcfadff10b7429caf30257cfa3b00f3.500x500x1.jpg",
	},
	{
		"title":"BabyWipe",
		"artist":"Ski Mask the Slump God",
		"mp3Url":"https://open.spotify.com/album/2wj14855mFHE9XCP5GNWnU",
		"imageUrl":"https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F880edce09def57ac4f54c6dcbc0ac101.500x500x1.jpg",
	}

];

function link_title(title, url) {
  	return "<a href='" + url + "'>" + title + "</a>";
  }

// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
  
  //$('body').append("<h3>" + link_title(mySong.title, mySong.mp3Url) + "</h3>" + "<p> <img src ='" 
		// 			+ mySong.imageUrl + "'> </p>" + "<p>" 
		// 			+ mySong.artist + "</p>" + mySong.songRating);
displayList();

});

function displayList(){

for (var i= 0; i < myPlayList.length; i = i + 1 ) {
	$('.songs').append("<div>" + "<h3>" + link_title(myPlayList[i].title,myPlayList[i].mp3Url)
	+ "</h3>" + "<img src ='" + myPlayList[i].imageUrl +"'>"
	+ "<p>" + myPlayList[i].artist + "</p>");
}

}


function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
