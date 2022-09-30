(function () {
  const bodyTag = document.querySelector('body');
  window.addEventListener('keydown', function (event) {
    let pressedKey = event.which;

    switch (pressedKey) {
      case 66 :
        bodyTag.className = 'one';
        break;
      case 86 :
        bodyTag.className = 'two';
        break;
      case 67 :
        bodyTag.className = 'three';
        break;
      case 70 :
        bodyTag.className = 'four';
        break;
      case 71 :
        bodyTag.className = 'five';
        break;
      default:
        alert("You didn't press one of the specified keys!");
    }
  });
}());