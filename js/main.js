let songs = [];

songs.unshift("Legs > by Z*ZTop on the album Eliminator");
songs.push("The Logical Song > by Supertr@amp on the album Breakfast in America");
songs.push("Another Brick in the Wall > by Pink Floyd on the album The Wall");
songs.push("Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction");
songs.push("Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill");

console.log(songs);


for (i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(" > ", " - ").replace("!", "").replace("@", "").replace("*","").replace("(", "");
	document.getElementById("songlist").innerHTML += `<li>${songs[i]}</li>`;
}


/* 
Add one song to the beginning and the end of the array.
Loop over the array, and remove any words or characters that obviously don't belong.
Find and replace the > character in each item with a - character.
Add each string to the DOM in index.html in the main content area.

{Song name} by {Artist} on the album {Album}
*/