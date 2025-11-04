// Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    if(isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch(operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': 
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default: result = "Invalid operator";
        }
    }

    document.getElementById("calcResult").innerText = `Result: ${result}`;
}

// Capitalize First Letter
function capitalizeWords() {
    const sentence = document.getElementById("sentence").value.trim();
    if(sentence === "") {
        document.getElementById("capitalized").innerText = "Please enter a sentence";
        return;
    }

    const capitalized = sentence.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
   
    document.getElementById("capitalized").innerText = capitalized;
}

// Check Palindrome
function checkPalindrome() {
    let str = document.getElementById("palindromeInput").value.trim().toLowerCase();
    if(str === "") {
        document.getElementById("palindromeResult").innerText = "Please enter a string";
        return;
    }

    const reversed = str.split("").reverse().join("");
    const result = str === reversed ? "Palindrome" : "Not a Palindrome";

    document.getElementById("palindromeResult").innerText = result;
}

function arrayFrequency() {
    const input = document.getElementById("arrayInput").value.trim();

    if (input === "") {
        document.getElementById("freqResult").innerText = "Please enter array elements";
        return;
    }

    // Split by commas, trim each item and remove empty items caused by extra commas
    const arr = input.split(",")
                     .map(item => item.trim())
                     .filter(item => item.length > 0);

    if (arr.length === 0) {
        document.getElementById("freqResult").innerText = "No valid elements found";
        return;
    }

    // Build frequency object
    const freq = {};
    arr.forEach(item => {
        // Normalize if you want case-insensitive counting:
        // const key = item.toLowerCase();
        const key = item; // keep original case
        freq[key] = (freq[key] || 0) + 1;
    });

    // Build readable result: sorted keys for stable output
    const keys = Object.keys(freq).sort();
    let resultHtml = "";
    keys.forEach(k => {
        // Use innerText equivalent by creating safe text + <br>
        resultHtml += `${k}: ${freq[k]}<br>`;
    });

    document.getElementById("freqResult").innerHTML = resultHtml;
}
