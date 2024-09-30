/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
           
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            
            if (stack.length === 0) {
                return false; 
            }
            const last = stack.pop(); //top element
            if (
                (char === ')' && last !== '(') ||
                (char === '}' && last !== '{') ||
                (char === ']' && last !== '[')
            ) {
                return false; // Mismatch found
            }
        }
    }

    return stack.length === 0; // Valid if stack is empty
};


module.exports = { isValid };
