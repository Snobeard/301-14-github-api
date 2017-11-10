// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

// $.ajax({
//   url: 'https://api.github.com/user/repos?type=owner',
//   method: 'GET',
//   headers: {
//     Authorization: `token ${github_token}`
//   }
// })

$.get('/github/user/repos')
  .then(
    data => {
      JSON.parse(data).forEach(repo => { $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><a href="${repo.clone_url}" target="_blank">Link To Repo</a><hr>`)})},
    err => console.error(err.status, err.statusText, 'is the way my stuff is broken'));
