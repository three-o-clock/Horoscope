let birthMonth = "March";


// thinking
// going to create an array with 3 different horoscopes for all the months
// then, im going to use Math.random with Math.floor to randomly choose among numbers 0, 1, 2 
// then im going to pass these numbers as array indices and nest it in an if statement
// finally, im going to print the value at that index

let index = Math.floor(Math.random() * 3);

let Aries = [ // april
    "Things are light and airy.",
    "Take deep breaths and long walks.",
    "Be prepared for surprises."
];

let Taurus = [ // may
    "Don't worry about it.",
    "Just go with the flow.",
    "Best-laid plans are apt to be broken."
];

let Gemini = [ // june
    "Do your best to maintain a positive attitude.",
    "If people are in your way, confront them.",
    "Take control of the issue when you see that something needs to get done."
];

let Cancer = [ // july
    "Today is an excellent day for you, Cancer.",
    "Events will flow quite smoothly.",
    "What you have to say will be right on target with today's energy."
];

let Leo = [ // august
    "You may be indecisive today, Leo.",
    "You may not be able to find solutions you can live with.",
    "You have a great deal of warmth and passion to share."
];

let Virgo = [ // september
    "There is plenty of air to fuel your fire today, Virgo.",
    "You're able to get quite a bit done.",
    "Multitasking is key to accomplishing what you want to do."
];

let Libra = [ // october
    "The pace may be a bit faster than you'd like.",
    "Remember that people aren't mind readers.",
    "Feel free to explore the unconventional and bizarre."
];

let Scorpio = [ // november
    "Today is an excellent day for you, Scorpio.",
    "Enjoy yourself and feel free to indulge in things that make you happy.",
    "Spend time with your family and let them share in your positive energy flow."
];

let Sagittarius = [ // december
    "Things may be moving a bit too quickly today for you to grab hold of anything, Sagittarius.",
    "Be prepared.",
    "People may not be entirely reliable."
];

let Capricorn = [ // january
    "Enjoy the day today, Capricorn",
    "Do it with a smile.",
    "Get your ideas out to others."
];

let Aquarius = [ // feb
    "Your flexible nature may get you in trouble today, Aquarius.",
    "Personalities may clash when no one is willing to lead.",
    "Give other people the freedom they want."
];

let Pisces = [ // march
    "Things will flow smoothly for you, Pisces.",
    "There's barely a reason for you to lift a finger.",
    "You're in sync with today's energy."
];

if (birthMonth === "January") {
    console.log(Capricorn[index]);
}

else if(birthMonth === "Febuary") {
    console.log(Aquarius[index]);
}

else if(birthMonth === "March") {
    console.log(Pisces[index]);
}

else if(birthMonth === "April") {
    console.log(Aries[index]);
}

else if(birthMonth === "May") {
    console.log(Taurus[index]);
}

else if(birthMonth === "June") {
    console.log(Gemini[index]);
}

else if(birthMonth === "July") {
    console.log(Cancer[index]);
}

else if(birthMonth === "August") {
    console.log(Leo[index]);
}

else if(birthMonth === "September") {
    console.log(Virgo[index]);
}

else if(birthMonth === "October") {
    console.log(Libra[index]);
}

else if(birthMonth === "November") {
    console.log(Scorpio[index]);
}

else {
    console.log(Sagittarius[index])
}
