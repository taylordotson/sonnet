var poem = document.getElementById("sonnet").innerHTML
console.log(poem.indexOf("orphans"));

console.log(poem.length);

var words = poem.replace("winter", "yuletide");
console.log(words);

document.body.innerHTML = document.body.innerHTML.replace(/ the /gi, "a large");