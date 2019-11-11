export default $stateProvider => {
  $stateProvider.state("about", {
    url: "/about",
    template: require("./about.html"),
    controller: "AboutCtrl",
    controllerAs: "$ctrl"
  });
};
