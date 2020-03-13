import 'bootstrap';
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';

const initSelect2 = () => {
  $('.select2').select2();
};

initSelect2();
console.log('testing');

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



