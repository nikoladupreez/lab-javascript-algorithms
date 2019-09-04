// Names and Input
//1
let hacker1 = `Frits`;

//2
console.log(`The driver's name is ${hacker1}`);

//3
let hacker2 = window.prompt(`What's your name?`) 

//4
console.log(`The navigator's name is ${hacker2}`);

//Conditionals (5)
function strLength(str1, str2){
    if (str1.length === str2.length){
        console.log(`Wow, you both got equally long names, ${str1.length} characters!!`);
    } else if (str1.length > str2.length){
        console.log(`The Driver has the longest name, it has ${str1.length} characters`);
    } else {
        console.log(`Yo, navigator got the longest name, it has ${str2.length} characters`);
    }
};

strLength(hacker1, hacker2);

//Loops --------------------------
//6 -------------
function splitCapStr1(str){
    let strCaps = str.toUpperCase();
    let strSplit = str.split('').join(' ');
    console.log(strSplit);
}

splitCapStr1(hacker1);

// or 

function splitCapStr2(str){
    let newStr = '';

    for (i = 0; i < str.length; i++){
    newStr += str.charAt(i) + ' ';
    }
    console.log(newStr);
};

splitCapStr2(hacker1);

//7 ------------
function reverseStr1(str){
    let newReverseStr = str.split('').reverse().join('');
    console.log(newReverseStr);
};

reverseStr1(hacker2);

//or

function reverseStr2(str){
    let newStr = '';

    for (i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    console.log(newStr);
};

reverseStr2(hacker2);

//8 ------------
function lexicoOrder1(str1, str2){
    let compareStrings = str1.localeCompare(str2);
    switch(compareStrings){
        case 0:
            console.log(`What?! You both got the same name?`);
            break;
        case -1:
            console.log(`The driver's name goes first`);
            break;
        case 1: 
            console.log(`Yo, the navigator goes first definitely`);
            break;
    }
};

lexicoOrder1(hacker1, hacker2);

//or 

function lexicoOrder2(str1, str2){
    let i = 0;
    let compareStr = 0;

    while (i < str1.length && i < str2.length){
        if (str1[i] < str2[i]){
            compareStr = -1;
            break;
        } else if (str1[i] > str2[i]){
            compareStr = 1;
            break;
        }
        i++;
    }

    if (compareStr === 0){
        if (str1.length < str2.length){
            compareStr = -1;
        } else if (str1.length > str2.length){
            compareStr = 1;
        } 
    }    

    switch(compareStr){
        case 0:
            console.log(`What?! You both got the same name?`);
            break;
        case -1:
            console.log(`The driver's name goes first`);
            break;
        case 1: 
            console.log(`Yo, the navigator goes first definitely`);
            break;
    }   
};

lexicoOrder2(hacker1, hacker2);

//Bonus -------------------
//9------------
let newStr = window.prompt('Please insert new string to check if it is a palindrome:');

function palindrome(str){
    let re = /[^A-Za-z0-9]/g;
    let lowerStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowerStr.split('').reverse().join('');
    
    if (reverseStr === lowerStr){
        console.log(`It is a palindrome!`);
    } else {
        console.log(`It is not a palindrome, try again..`);
    }
};

palindrome(newStr);

//10 ------------
let someString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tellus nisi, tristique in malesuada in, ultricies sit amet nisl. Pellentesque tincidunt tortor eu dui elementum sollicitudin. Duis porta arcu nec leo tincidunt dignissim. Pellentesque consectetur lorem non faucibus facilisis. Praesent elementum posuere lobortis. Cras faucibus vestibulum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac finibus sapien. Sed quis massa id tortor dictum vestibulum quis ac purus.

Duis tempus, leo sit amet mollis blandit, nulla massa egestas libero, vehicula eleifend ante sapien eget metus. Duis id ullamcorper justo, vel hendrerit risus. Ut ac sem at velit ornare bibendum. Duis ipsum nisl, luctus vitae finibus a, tincidunt sit amet elit. Etiam vitae nunc quam. Nullam porttitor libero sed neque hendrerit rhoncus. Aliquam nulla diam, viverra sed tempus eget, viverra ac metus. Maecenas ornare justo vel elementum sagittis.

Nam vitae finibus lacus, eu rutrum mauris. Fusce vel elit maximus augue auctor rutrum ut eget diam. Fusce nec congue magna. Quisque id elit aliquam, cursus augue laoreet, ultricies nisl. Proin ante ipsum, condimentum vel mi quis, consectetur dapibus erat. Cras id sem ut nulla rutrum lobortis. Praesent eget sapien vel sapien ullamcorper venenatis. Sed lacinia, mi eu viverra aliquet, nisl orci congue metus, non semper arcu tortor quis enim.

`;

function wordCount(str){
   console.log(str.split(' ').length);
};

wordCount(someString);

function wordMatch(str){
    let found = str.match(/et/g);
    console.log(found);
};

wordMatch(someString);