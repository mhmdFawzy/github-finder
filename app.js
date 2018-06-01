// init github class and ui
const github = new Github,
    ui = new UI,
    // get search input
    searchInput = document.getElementById('searchUser');

searchInput.addEventListener('keyup', (e) => {
// get input value
const inputValue = e.target.value;

if (inputValue !== '') {
    // Make http call
    github.getUser(inputValue)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger alert-dismissible fade show');
            } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
} else {
    // Clear profile
    ui.clearProfile();
}
});
