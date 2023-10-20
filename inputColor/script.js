const colorInput = document.getElementById('colorInput');
const cardHeader = document.querySelector('.card-header');
const cardFooter = document.querySelector('.card-footer');

colorInput.addEventListener('input', function() {
  const selectedColor = colorInput.value;
  cardHeader.style.backgroundColor = selectedColor;
  cardFooter.style.backgroundColor = selectedColor;
});