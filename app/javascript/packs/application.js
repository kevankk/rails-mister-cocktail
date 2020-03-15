
import 'select2/dist/css/select2.css';
import { initSelect2 } from './components/init_select2';

import { loadDynamicBannerText } from './components/type';

initSelect2();
loadDynamicBannerText();

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
