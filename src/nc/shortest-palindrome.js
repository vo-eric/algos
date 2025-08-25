function shortestPalindrome(s: string): string {
    /*

    abcd

    po => opo
    pol => lopol
    polo => olopolo

    from length to 0
    add current char to the front of the existing string
    test to see if it's a palindrome

    
     abcd
     babcd
     

    ababc

    

    create the longest palindrome possible by adding the reverse of the string to the beginning of the string
    

    */

    // let result = "";

    // // for (const char of s.slice(1)) {
    // for (let i = 0; i <= s.length; i++) {
    //     let right = i;
    //     let currentString = s;

    //     while (right <= s.length) {
    //         if (isPalindrome(currentString)) {
    //             if (!result.length || result.length > currentString.length) {
    //                 result = currentString;
    //             }
    //         };
    //         currentString = s[right] + currentString;
    //         right++
    //     }
        
    // }

    // return result;

    if (isPalindrome(s)) {
        return s;
    }

    let currentString = s;
    const reversed = s.split('').reverse().join('');

    for (let i = 0; i < reversed.length; i++) {
        currentString = currentString.slice(0, i) + reversed[i] + currentString.slice(i);

        if (isPalindrome(currentString)) {
            return currentString;
        }
    }

    return currentString;
};

const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


/*

abbacd
  ^
dcabbabbacd

dcababbacd



dcabbacd


aaabc

c


*/