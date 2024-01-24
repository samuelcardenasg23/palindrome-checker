const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const isPalindrome = (input) => {
    const cleanedInput = input.toLowerCase().replace(/[^A-Za-z0-9]/gi, ''); // Convert to lowercase and remove non-alphanumeric characters
    const reversedInput = cleanedInput.split('').reverse().join(''); // Reverse the cleaned input
    return cleanedInput === reversedInput;
};

const checkForPalindrome = (input) => {
    if (input === '') {
        alert('Please input a value');
        return;
    } else if (isPalindrome(input)) {
        resultDiv.innerHTML = `<p><strong>${input}</strong> is a palindrome</p>`;
    } else {
        resultDiv.innerHTML = `<p><strong>${input}</strong> is not a palindrome</p>`;
    }
};

checkBtn.addEventListener("click", () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = '';
    }
});