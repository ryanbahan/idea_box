var main = document.querySelector('main');
var buttonRow = document.querySelector('.button-row');
var formOne = document.querySelector('.form-step-1');
var formTwo = document.querySelector('.form-step-2');
var pageTitle = document.querySelector('.page-title');

formOne.addEventListener('submit', displayFormTwo);
main.addEventListener('submit', startTimer);
buttonRow.addEventListener('click', activateButton);

function displayFormTwo() {
  var formElements = Array.prototype.slice.call(formOne.elements);
  var formInputs = formElements.filter(el => el.localName === "input");
  event.preventDefault();
  pageTitle.innerHTML = "Current Activity";
  pageTitle.insertAdjacentHTML('afterend', `
    <form class="form-step-2">
      <h2>${formInputs[0].value}</h2>
      <p class="timer-time">${formInputs[1].value}:${formInputs[2].value}</p>
      <button type="submit" id="timer-start">START</button>
    </form>
  `)
  formOne.classList.add('hidden');
}

function startTimer() {
  if (event.target.classList.contains('form-step-2')) {
    event.preventDefault();
    var time = document.querySelector('.timer-time').innerHTML;
    time = time.replace(':','');
    var timeInt = parseInt(time, 10);
    console.log(timeInt);
    console.log('woof');
  }
}

function activateButton() {
  switch (event.target.classList[0]) {
  case 'study':
    var studyBtn = document.querySelector('.study-btn');
    var studyBtnActive = document.querySelector('.study-active');
    var studyImg = document.querySelector('.study-img-active');
    var activeImg = document.querySelector('.study-img-hidden');
    studyBtn.classList.add('study-active');
    if (studyBtnActive !== null) {
      studyBtnActive.classList.remove('study-active');
    }
    studyImg.classList.remove('study-img-active');
    studyImg.classList.add('study-img-hidden');
    activeImg.classList.remove('study-img-hidden');
    activeImg.classList.add('study-img-active');
    break;
  case 'meditate':
    var meditateBtn = document.querySelector('.meditate-btn');
    var meditateBtnActive = document.querySelector('.meditate-active');
    var meditateImg = document.querySelector('.meditate-img-active');
    var activeImg = document.querySelector('.meditate-img-hidden');
    meditateBtn.classList.add('meditate-active');
    if (meditateBtnActive !== null) {
      meditateBtnActive.classList.remove('meditate-active');
    }
    meditateImg.classList.remove('meditate-img-active');
    meditateImg.classList.add('meditate-img-hidden');
    activeImg.classList.remove('meditate-img-hidden');
    activeImg.classList.add('meditate-img-active');
    break;
  case 'exercise':
    var exerciseBtn = document.querySelector('.exercise-btn');
    var exerciseBtnActive = document.querySelector('.exercise-active');
    var exerciseImg = document.querySelector('.exercise-img-active');
    var activeImg = document.querySelector('.exercise-img-hidden');
    exerciseBtn.classList.add('exercise-active');
    if (exerciseBtnActive !== null) {
      exerciseBtnActive.classList.remove('exercise-active');
    }
    exerciseImg.classList.remove('exercise-img-active');
    exerciseImg.classList.add('exercise-img-hidden');
    activeImg.classList.remove('exercise-img-hidden');
    activeImg.classList.add('exercise-img-active');
    break;
}
}
