function shout(arg) {
    console.log(arg.toUpperCase());
    return arg.toUpperCase();
}
function whisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    // Initiate variable to be returned
    let reply
    // Set the conditionals to set the "reply" variable 
    if (string === string.toLowerCase()){
         reply = "I can't hear you!";
        console.log(reply)
    } else if (string === string.toUpperCase()){
         reply = "YES INDEED!";
    } else {
         reply = "I would love to!"
    }
    // Console log to make sure we are getting the right values
    console.log(reply);
    //Return the value when executing the function
    return reply;
};

shout("Darn!");
whisper("Oh Crap...");
logShout("Log me baby");
logWhisper("But not too loud");

sayHiToHeadphonedRoommate("YAY");
