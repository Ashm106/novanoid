const all = document.querySelector("#all");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

const imgsOne = document.querySelectorAll('.one');
const imgsTwo = document.querySelectorAll('.two');
const imgsThree = document.querySelectorAll('.three');

one.addEventListener('click', function() {
  for(i=0; i < imgsOne.length; i++) {
    imgsOne[i].classList.remove('notSelected')
    imgsOne[i].classList.add('selected')
    imgsTwo[i].classList.add('notSelected');
    imgsTwo[i].classList.remove('selected');
    imgsThree[i].classList.remove('selected');
    imgsThree[i].classList.add('notSelected');
  }
});
two.addEventListener('click', function() {
  for(i=0; i < imgsTwo.length; i++) {
    imgsTwo[i].classList.remove('notSelected');
    imgsTwo[i].classList.add('selected');
    imgsThree[i].classList.add('notSelected');
    imgsThree[i].classList.remove('selected');
    imgsOne[i].classList.add('notSelected');
    imgsOne[i].classList.remove('selected');
  }
});
three.addEventListener('click', function() {
  for(i=0; i < imgsThree.length; i++) {
    imgsThree[i].classList.remove('notSelected');
    imgsThree[i].classList.add('selected');
    imgsOne[i].classList.add('notSelected');
    imgsOne[i].classList.remove('selected');
    imgsTwo[i].classList.add('notSelected');
    imgsTwo[i].classList.remove('selected');
  }
});
all.addEventListener('click', function() {
  for(i=0; i < imgsThree.length; i++) {
    imgsThree[i].classList.remove('notSelected');
    imgsThree[i].classList.add('selected');
    imgsOne[i].classList.remove('notSelected');
    imgsOne[i].classList.add('selected');
    imgsTwo[i].classList.remove('notSelected');
    imgsTwo[i].classList.add('selected');
  }
});

