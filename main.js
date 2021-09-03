// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

const like = document.querySelectorAll('.like');


let colorStates = {
  "red": "",
  "": "red"
}

let glyphState = {
  '♥': '♡',
  '♡': '♥'
}

function heartCallBack(e) {
  console.log(e)
  const heartClick = e.target;
  mimicServerCall("fakeUrl")
    .then(function (serverMessage) {
      heartClick.style.color = colorStates[heartClick.style.color]
      heartClick.innerText = glyphState[heartClick.innerText]
      console.log(like)
    })
    .catch(function () {
      errorModal.classList.remove('hidden');
      setTimeout(() => errorModal.classList.add('hidden'), 3000);
    })
}

for (let glypth of like) {
  console.log(glypth)
  glypth.addEventListener("click", heartCallBack)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
