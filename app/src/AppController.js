/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(BanksDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.banks        = [ ];
  self.selectBank   = selectBank;
  self.toggleList   = toggleBanksList;

  // Load all registered users

  BanksDataService
        .loadAllBanks()
        .then( function(banks) {
          self.banks    = [].concat(banks);
          self.selected = banks[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleBanksList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectBank ( bank ) {
    self.selected = angular.isNumber(bank) ? $scope.banks[bank] : bank;
  }
}

export default [ 'BanksDataService', '$mdSidenav', AppController ];
