// Load the custom app ES6 modules

//import UsersDataService from 'src/users/services/UsersDataService';
import BanksDataService from 'src/banks/services/BanksDataService';

//import UsersList from 'src/users/components/list/UsersList';
import BanksList from 'src/banks/components/List/BanksList';
//import UserDetails from 'src/users/components/details/UserDetails';
import BankDetails from 'src/banks/components/details/BankDetails';

// Define the Angular 'users' module

export default angular
  .module("banks", ['ngMaterial'])

  .component(BanksList.name, BanksList.config)
  .component(BankDetails.name, BankDetails.config)

  .service("BanksDataService", BanksDataService);
