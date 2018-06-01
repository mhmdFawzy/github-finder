class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile(user) {
        let bio = '';
        if (user.bio) {
            bio = user.bio;
        } else {
            bio = 'No Bio'
        }
        this.profile.innerHTML = `
        
        <div class="card col-12 mb-3">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <span class="badge badge-primary col-12 col-md-6">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success col-12 col-md-6">Public Gists: ${user.public_gists}</span>
                    </div>
                    <div class="row">
                        <span class="badge badge-success col-12 col-md-6">Followers: ${user.followers}</span>
                        <span class="badge badge-primary col-12 col-md-6">Following: ${user.following}</span>
                    </div>
                    <br>
                    <br>
                    <div class="col-12">
                        <h3>
                            Name: </h3>
                        <p class="lead">${user.name}</p>
                    </div>
                    <div class="col-12">
                        <h3>
                            About: </h3>
                        <p class="lead">${bio}</p>
                    </div>

                    <ul class="list-group col-12">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
    <h3 class="mb-3">Latest Repos</h3>

      `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
         
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col-md-6">
                                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                                <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {

        // Create div
        const divError = document.createElement('div');
        // Get search box
        const search = document.querySelector('#searchUser');
        // Add classes
        divError.className = className;
        divError.innerHTML = `<button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>`;
        // Add text
        divError.appendChild(document.createTextNode(message + '  ' + `'${search.value}'`));
        // Get parent
        const contai = document.querySelector('.searchContainer');

        // Insert alert
        contai.insertAdjacentElement('afterbegin', divError);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }



    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}