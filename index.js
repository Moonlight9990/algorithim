// At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:

 

// Instructions
// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters. 

// function sentence (character) {
//     let counter = character.length
//     let sum = 

//     for (i = 0; i < counter; i++) {
//         if (character == ' '){
            
//         }
//         wordSum = i
//         console.log(wordSum);
//     }
// }

// const word = "hi my name is elijah"
// sentence(word)


const sentenceAnalyzer = (sentence) => {
    let length = 0;
    let vowelCount = 0;
    let wordCount = 0;
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
    for(let i = 0; i < sentence.length; i++) {
        let character = sentence[i]

        if (character !== " "){
            length ++
            if( character == '.'){
                length--
            } if (vowel.indexOf(character) < 0){
                vowelCount++;
            }
        } else if (length > 0){
            wordCount++;
        }
    }

   console.log("Sentence length:", length)
   console.log("Vowel Count:", vowelCount - 1);
   console.log("Word Count:", wordCount);

}

let sentence = "I am a comment";
sentenceAnalyzer(sentence);