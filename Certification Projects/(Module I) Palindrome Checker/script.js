document.getElementById('check-btn').addEventListener('click', function() {
    var inputElement = document.getElementById('text-input');
    var inputValue = inputElement.value;
    var resultElement = document.getElementById('result');
  
    if (inputValue === '') {
      alert('Please input a value');
    } else {
      var words = inputValue.split(' ');
  
      // Verifica se a primeira palavra é um palíndromo
      var isPalindrome = words[0].toLowerCase() === words[0].toLowerCase().split('').reverse().join('');
  
      // Wrap only the first word in a <strong> tag
      var resultText = isPalindrome ? `<strong>${words[0]}</strong> ${words.slice(1).join(' ')} is a palindrome` : `<strong>${words[0]}</strong> ${words.slice(1).join(' ')} is not a palindrome`;
  
      resultElement.innerHTML = resultText;
  
      inputElement.value = '';
    }
  });
  