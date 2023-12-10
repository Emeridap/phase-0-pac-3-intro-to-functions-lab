function shout(string) { return string.toUpperCase(); }
"Hello!".toUpperCase(); // 'HELLO!'
function whisper(string) { return string.toLowerCase(); }
"HELLO!" .toLowerCase(); // 'hello!'
function logShout(string) { console.log(string.toUpperCase());}
logShout("hello"); // Output: HELLO
function logWhisper(string) { console.log(string.toLowerCase());}
logWhisper("HELLO"); //Output : hello
function sayHiToHeadphonedRoommate(string) { 
    if (string.toLowerCase() === string) { return "I can't hear you!"; } 
    else if (string.toUpperCase() === string) { return "YES INDEED!"; } 
    else if (string === "I would love to!") { return string; } 
    else if (string === "Let's have dinner together!") { return "I would love to!"; }
}
console.log(sayHiToHeadphonedRoommate("I can't hear you!")); // Output: I can't hear you!
console.log(sayHiToHeadphonedRoommate("YES INDEED!")); // Output: YES INDEED!
console.log(sayHiToHeadphonedRoommate("I would love to!")); // Output: I would love to!