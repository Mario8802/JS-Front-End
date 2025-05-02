function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');

  const words = text.toLowerCase().split(' ');

  let result = '';

  if (convention === 'Camel Case') {
      result = words[0];
      for (let i = 1; i < words.length; i++) {
          result += words[i][0].toUpperCase() + words[i].slice(1);
      }
  } else if (convention === 'Pascal Case') {
      for (let word of words) {
          result += word[0].toUpperCase() + word.slice(1);
      }
  } else {
      result = 'Error!';
  }

  resultElement.textContent = result;
}
