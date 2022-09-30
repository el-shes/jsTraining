(function () {
  const h1Tag = document.querySelector('h1');
  const formTag = document.querySelector('form');

  formTag.addEventListener('submit', function (event) {
    event.preventDefault();
    let myNum = parseInt(document.querySelector('input').value);

    if (myNum) {
      h1Tag.style.fontSize = myNum + 'px';
    } else {
      alert('please enter a number');
    }
  });
}());

