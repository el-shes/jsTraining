(function () {
  const divTag = document.querySelector('div');
  const createBtn = document.querySelectorAll('button')[0];
  const deleteBtn = document.querySelectorAll('button')[1];
  let numOfPs = 1;

  createBtn.addEventListener('click', function () {
    numOfPs++;
    let newP = document.createElement('p');
    let pText = document.createTextNode(`This is paragraph number ${numOfPs}`);
    newP.appendChild(pText);
    divTag.appendChild(newP);
  });

  deleteBtn.addEventListener('click', function () {
    if (numOfPs > 1) {
      divTag.removeChild(divTag.children[numOfPs - 1]);
      numOfPs--;
    } else {
      alert("don't delete the last paragraph!");
    }
  });
}());

