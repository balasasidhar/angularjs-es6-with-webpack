export default class HomeController {
  constructor($http) {
    "ngInject";
    this.$http = $http;
    this.name = "Home";
    this.users = [];
    console.log(this.name);
  }

  getJSONData() {
    const self = this;
    this.$http.get("https://reqres.in/api/users").then(
      response => {
        const {
          data: { data: users }
        } = response;
        self.users = users;
      },
      err => console.error(err)
    );
  }
}
