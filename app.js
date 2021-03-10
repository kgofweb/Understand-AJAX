// DOM elements
const btn = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btn3 = document.querySelector('.button3');

const user = document.getElementById('user');
const result = document.getElementById('posts');
const gitUser = document.getElementById('github');

// Event listener
btn.addEventListener('click', loadUser);
btn2.addEventListener('click', loadPosts);
btn3.addEventListener('click', loadGitUsers);

// get User
function loadUser() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      const response = JSON.parse(this.responseText);
      user.innerHTML = `
        <p>ID: <b>${response.id}</b></p>
        <p>Name: <b>${response.name}</b></p>
        <p>Function: <b>${response.function}</b></p>
        <p>Age: <b>${response.age}</b></p>
      `;
    } else if(this.status == 404) {
      user.innerHTML = "Une erreur est survenue... Vérifier l'URL et réessayer";
    }
  }

  xhr.open('GET', 'http://localhost:5000/profile', true);
  xhr.send();
}

// Posts
function loadPosts() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
      const posts = JSON.parse(this.responseText);
      
      let output = '';

      for(let post in posts) {
        output += `
          <p>ID: <b>${posts[post].id}</b></p>
          <p>Title: <b>${posts[post].title}</b></p>
          <p>Author: <b>${posts[post].author}</b></p>
          <br/>
        `;
      }
      result.innerHTML = output;
    } else if(this.status == 404) {
      result.innerHTML = `Erreur ${this.status}... Vérifier l'URL et réessayer`;
    }
  }

  xhr.open('GET', 'http://localhost:5000/posts', true);
  xhr.send();
}

// Github Users
function loadGitUsers() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      const gitUsers = JSON.parse(this.responseText);

      let output = '';

      for(let git in gitUsers) {
        output += `
          <div class="user">
            <img src="${gitUsers[git].avatar_url} width="50" height="50">
            <ul>
              <p>ID: ${gitUsers[git].id}</p>
              <p>Login: ${gitUsers[git].login}</p>
            </ul>
          </div>
        `;
      }

      gitUser.innerHTML = output;

    } else if(this.status == 404) {
      gitUser.innerHTML = `Erreur ${this.status}... Vérifier l'URL et réessayer`;
    }
  }

  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.send();
}