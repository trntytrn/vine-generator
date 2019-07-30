var vines = ["hi, welcome to chili's",
"two bros chillin in a hot tub, five feet apart 'cuz they're not gay",
"what up, i'm jared, i'm nineteen and i never learned how to read",
 "stop i could've dropped my croissant",
 "happy birthday raven! i can't swim", "look at all those chickens",
 "i spilled lipstick in your valentino bag .. YOU SPILLED LIPSTICK IN MY FDSJHFAVALENTINO WHITE BAG ???????????????",
  "how do you know what's good for me ????? thats mY oPINION !!!!!!!",
  "can i get a waffle? can i PlEaSe get a waffle?",
  "what's up my name is trey i got a basketball game tomorrow",
  "road work ahead? uh yeah i sure hope it does",
  "so you just gonna bring me a birthday gift on my birthday to my birthday party on my birthday with a birthday gift?",
  "i'm lesbian. i thought you were american?",
  "i'm washing me and my clothes",
  "i think i know more about american girl doll than you do genius",
  "you're disrespecting a future US army soldier",
  "you're gonna make me LoSe mY MArBLeS",
  "why you in such a big time rush",
  "i only have 69 cents. you know what that means---- i have no money for chicken nuggets :(",
  "i love myself even though i look like a burnt chicken nugget i still love myself",
  "welcome to t-t-t-t-target",
  "this b empty YEET",
  "um i've never been to oovoo javer",
  "bring the beat in- ANYTHING FOR YOU BEYONCE",
  "there's only one thing worse than a rapist- a child! no.",
  "it's wednesday my dudes aAAAAAAAAAAAAAAAAAAA",
  "ur not my dad ugly noodle head",
  "daddy? do i loOK LIKE-",
  "has anyone ever told you you look like beyonce? no they usually tell me i look like shalissa",
  "guess who i am- lets go to the beach beach... nikki minjaj",
  "merry chyslar",
  "its an avocado...thaaaaaaankss",
  "shawty i dont MIIIINDDDD",
  "i can't believe you've done this",
]

var button = $('.button')
var output = $('h2')

button.on("click", doSomething);


function doSomething() {
  event.preventDefault();
  console.log("you clicked the button!");
  var vine = Math.floor(Math.random() * vines.length);
  var vineOutput = vines[vine];
  output.text(vineOutput);
}
