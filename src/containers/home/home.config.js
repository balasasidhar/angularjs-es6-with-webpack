export default $stateProvider => {
  $stateProvider.state("home", {
    url: "/",
    template: require("./home.html"),
    controller: "HomeCtrl",
    controllerAs: "$ctrl"
  });
};
