/* 20211031
codewars kyu 7
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    if (typeof str != 'string') return false;
    let vowels = 'aeiou';
    let resultStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.indexOf(char.toLowerCase()) === -1) {
            resultStr += char;
        }
    }
    console.log(resultStr);
    return resultStr;
}

let array = [0, 1, 2, 3, 4, 5];
let arr1 = array.slice(0, 2);
console.log(arr1)
let arr2 = array.slice(2 + 1)
console.log(arr2)
console.log(arr1.concat(arr2))

disemvowel("This website is for losers LOL!")//, "Ths wbst s fr lsrs LL!")
disemvowel("No offense but,\nYour writing is among the worst I've ever read")//, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
disemvowel("What are you, a communist?")//, "Wht r y,  cmmnst?")
disemvowel(100)
