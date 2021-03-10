// DOM elements
const button = document.getElementById('button');
const form = document.getElementById('getForm');
const postForm = document.getElementById('postForm');

// Event Listner
button.addEventListener('click', getName);
form.addEventListener('submit', gotName);
postForm.addEventListener('submit', postName);

function getName() {
  // Create xhr object
  const xhr = new XMLHttpRequest();
  // Lsten state change
  xhr.onreadystatechange = function() {
    // Request == 4 and status is done
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log(this.responseText);
    }
  }

  xhr.open('GET', 'process.php?name=Kerol', true);
  xhr.send();
}


function gotName(e) {
  e.preventDefault();

  const name = document.getElementById('name1').value;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log(this.responseText);
    }
  }

  xhr.open('GET', `process.php?name=${name}`, true);
  xhr.send();
}


function postName(e) {
  e.preventDefault();

  const name = document.getElementById('name2').value;
  const params = `name= ${name}`;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log(this.responseText);
    }
  }

  xhr.open('POST', `process.php`, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(params);
}