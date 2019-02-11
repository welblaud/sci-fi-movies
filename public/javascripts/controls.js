// controls.js

'use strict';

window.onload = () => {

  // This is replaceable with the very basic 'placeholder' HTML attribute!
  const input = document.getElementById('searchInput');
  input.addEventListener('focus', () => { if ( input.value == 'Hledej!' ) { input.value = ''; } }, false);
  input.addEventListener('blur', () => { if ( input.value == '' ) { input.value = 'Hledej!'; } }, false);

}

