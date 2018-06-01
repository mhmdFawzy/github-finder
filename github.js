class Github {
  constructor() {
    this.client_id = '2a98370490c6e976f853';
    this.client_secret = 'd9eb6549c0f1bc20c99139f9753b103eedf1c55d';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // after we fetch something we have to set the response type
    // The json() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that
    //  resolves with the result of parsing the body text as JSON.
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
