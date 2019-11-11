export default (
  $urlRouterProvider,
  $urlMatcherFactoryProvider,
  $locationProvider
) => {
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.strictMode(false);
  $urlRouterProvider.otherwise("/");
};
