const input = document.querySelector('#search')
input.addEventListener('keyup', (e) => {
  const user_input = e.target.value;
  document.querySelectorAll('.card-container').forEach(c => {
    const cocktail = c.innerText.toLowerCase();
    if (cocktail.match(user_input) === null) {
      c.classList.add('hidden');
    } else {
      c.classList.remove('hidden');
    }
})
})



