// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

// let john = 'John'
// let michael = 'Michael'

// class Person{
//   constructor(name){
//     this.name = name
//   }

// }

let message1 = helloMessage
let message2 = heyThereMessage

let john = 'John';
say.call(message1, john);

let michael = 'Michael';
say.call(message2, michael);

// say(heyThereMessage, "Michael");

// john.say('john')
