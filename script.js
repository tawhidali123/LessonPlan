// We queryselect the button the user would click to have access to that event
let bttn = document.querySelector('.bttn')

// We querySelect the place where we want to store something after the click
let wallFeed = document.querySelector('.wallFeed')


// addEventListener is waiting for a user to 'click' that specific button we named bttn as a variable
bttn.addEventListener('click', function(){

  // When the button is clicked we are activating a function which updates the DOM and adds something to the WallFeed element we queryselected
  wallFeed.innerHTML = 'The click is working!'
})