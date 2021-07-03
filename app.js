const container = document.querySelector('.container');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const table = document.querySelector('.table');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value === '') {
    showError('Please enter a number!');
  } else {
    displayTable(input.value);
  }
});

const displayTable = (n) => {
  let output = `<h1>Table of ${n}</h1>`;
  if (n) {
    for (let i = 1; i <= 10; i++) {
      output += `
        <h3>${n} x ${i} = <span id="special-text">${n * i}</span> </h3>
        `;
    }
  }
  table.style.display = 'block';
  table.innerHTML = output;
  input.value = '';
};

const showError = (msg) => {
  const h2 = document.createElement('h2');
  h2.className = 'error';
  h2.appendChild(document.createTextNode(msg));
  container.insertBefore(h2, table);
  setTimeout(() => h2.remove(), 2500);
};
