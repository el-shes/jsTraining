(function () {
  const divTag = document.querySelector('div');
  const createBtn = document.querySelectorAll('button')[0];
  const deleteBtn = document.querySelectorAll('button')[1];

  createBtn.addEventListener('click', function () {
    let newP = document.createElement('p');
    let pText = document.createTextNode('A new paragraph');
    newP.appendChild(pText);
    divTag.appendChild(newP);
  });

  deleteBtn.addEventListener('click', function () {
    let allPs = document.querySelectorAll('p');
    divTag.removeChild(divTag.children[allPs.length - 1]);
  });
}());

