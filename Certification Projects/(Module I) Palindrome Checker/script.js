document.getElementById('check-btn').addEventListener('click', function() {
    var inputElement = document.getElementById('text-input');
    var inputValue = inputElement.value;
    var resultElement = document.getElementById('result');
  
    if (inputValue === '') {
      alert('Please input a value');
    } else {
      var cleanedInput = inputValue.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      var isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
  
      var words = inputValue.split(' ');
      var resultText = isPalindrome ? `<span>${words[0]}</span> ${words.slice(1).join(' ')} is a palindrome` : `${inputValue} is not a palindrome`;
  
      resultElement.innerHTML = resultText;
  
      inputElement.value = '';
    }
  });
  