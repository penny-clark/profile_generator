const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Q1
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  console.log(`Name/nickname: ${answer1}`);
  //question 2
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`Activity: ${answer2}`);
    //question 3
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Music choice: ${answer3}`);
      //question 4
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`Favourite meal time: ${answer4}`);
        //question 5
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Favourite food: ${answer5}`);
          //question 6
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            console.log(`Favourite sport: ${answer6}`);
            //question 7
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Your superpower: ${answer7}`);
              console.log(`Okay, here is your new profile! Don't forget to write it down ;-)`)
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`)
              rl.close();
            });
          });    
        });        
      });
    });
  });
});
