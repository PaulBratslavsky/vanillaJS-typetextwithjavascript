console.log('connected...');
/*

// Funciton Prototype Method

const TypeWriter = function(element, words, wait = 3000) {
    
    // Initial Constructor 
    this.element = element;
    this.words = JSON.parse(words);
    this.wait = parseInt(wait, 10);

    // Current Position of Text
    this.txt = '';

    // Current Position in Text Array
    this.wordIndex = 0;

    this.type();
    this.isDeleting = false;
}

// Create Type Method
TypeWriter.prototype.type = function() {
    // Get Current Index of Word
    const current = this.wordIndex % this.words.length;
    console.log(current);

    // Get Full Text of Current Word
    const currentWord = this.words[current];
    console.log(currentWord)

    // Check if Deleting State
    if (this.isDeleting) {
        console.log(true);
        // Remove Char
        this.txt = currentWord.substring(0, this.txt.length - 1);
        console.log(this.txt);

    } else {
        console.log(false);
        // Add Char
        this.txt = currentWord.substring(0, this.txt.length + 1);
        console.log(this.txt);
    }

    // Insert Word into Element
    this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed 
    let typeSpeed = 200;

    if (this.isDeleting) {
        typeSpeed /= 2;
        console.log(typeSpeed, 'deleting spped');
    } 

    // Check if word is complete
    if ( !this.isDeleting && this.txt === currentWord ) {
        console.log('YES');
        // Make Pause When Word is Complete
        typeSpeed = this.wait;
        console.log(typeSpeed, 'wait speed')

        // Set Delete to True
        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {
        console.log('NO');
        this.isDeleting = false;

        // Move to Next Word 
        this.wordIndex++;
        
        // Pause Before Typing
        typeSpeed = 500;

    } else {
        
    }

    setTimeout( () => this.type(), typeSpeed);
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App 
function init() {
    const element = document.querySelector('.txt-type');
    console.log(element, 'element')

    const words = element.getAttribute('data-words');
    console.log(words, 'words')

    const wait = element.getAttribute('data-wait');
    console.log(wait, 'wait time')

    // Init TypeWriter
    new TypeWriter(element, words, wait);
}
*/
// REWRITE ES6 CLASS

class TypeWriter {

    constructor(element, words, wait = 3000) {
        // Initial Constructor 
        this.element = element;
        this.words = JSON.parse(words);
        this.wait = parseInt(wait, 10);

        // Current Position of Text
        this.txt = '';

        // Current Position in Text Array
        this.wordIndex = 0;

        this.type();
        this.isDeleting = false;
    }

    type() {
        // Get Current Index of Word
        const current = this.wordIndex % this.words.length;
        console.log(current);

        // Get Full Text of Current Word
        const currentWord = this.words[current];
        console.log(currentWord)

        // Check if Deleting State
        if (this.isDeleting) {
            console.log(true);
            // Remove Char
            this.txt = currentWord.substring(0, this.txt.length - 1);
            console.log(this.txt);

        } else {
            console.log(false);
            // Add Char
            this.txt = currentWord.substring(0, this.txt.length + 1);
            console.log(this.txt);
        }

        // Insert Word into Element
        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed 
        let typeSpeed = 200;

        if (this.isDeleting) {
            typeSpeed /= 2;
            console.log(typeSpeed, 'deleting spped');
        } 

        // Check if word is complete
        if ( !this.isDeleting && this.txt === currentWord ) {
            console.log('YES');
            // Make Pause When Word is Complete
            typeSpeed = this.wait;
            console.log(typeSpeed, 'wait speed')

            // Set Delete to True
            this.isDeleting = true;

        } else if (this.isDeleting && this.txt === '') {
            console.log('NO');
            this.isDeleting = false;

            // Move to Next Word 
            this.wordIndex++;
            
            // Pause Before Typing
            typeSpeed = 500;
        }

        setTimeout( () => this.type(), typeSpeed );
    }
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App 
function init() {
    const element = document.querySelector('.txt-type');
    console.log(element, 'element')

    const words = element.getAttribute('data-words');
    console.log(words, 'words')

    const wait = element.getAttribute('data-wait');
    console.log(wait, 'wait time')

    // Init TypeWriter
    new TypeWriter(element, words, wait);
}