const buttons = document.querySelectorAll('.buy-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    alert(`Você comprou o produto: ${product}`);
  });
});
