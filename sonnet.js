var sonnet = document.getElementById("sonnet").innerHTML;
console.log(sonnet);

var orphansPosition = sonnet.indexOf("orphans");
console.log(orphansPosition);

var sonnetLength = sonnet.length;
console.log(sonnet.length);

var sonnet = sonnet.replace("winter", "yuletide");
console.log(sonnet);

var sonnet = sonnet.replace(/the /gi, "a large ");
console.log(sonnet);

document.getElementById("sonnet").innerHTML = sonnet;

// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.

// How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark
// days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn,
// big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this
// abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And,
// thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the
// winter's near.