
// Info needed from API
// "name": "Kelly Miller",
//  "url": "https://api.github.com/users/designbright",
//  "email": null,
//  "company": "The Iron Yard",
//  "avatar_url": "https://avatars1.githubusercontent.com/u/28907628?v=4",


// 1. First, find our UL Container
let container = document.querySelector('body');

// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayGithubInfo);
request.open('GET', 'https://api.github.com/users/BubbaBean');
request.send();

// Our display function
function displayGithubInfo () {

// Parse our response text
  let githubData = JSON.parse(this.responseText);
    console.log(githubData);

  document.getElementById("name").innerHTML = `name ` + githubData.name;
  document.getElementById("url").innerHTML = `URL ` + githubData.url;
  document.getElementById("email").innerHTML = `email ` + githubData.email;
  document.getElementById("company").innerHTML = `avatar ` + githubData.avatar_url;
};
