const cursor = document.getElementById('custom-arrow');

//Custom cursor follows the mouse smoothly
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

//Detect when to switch to doubleSword
document.querySelectorAll('input, span, a').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.remove('sword');
    cursor.classList.add('doubleSword');
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('doubleSword');
    cursor.classList.add('sword');
  });
});