// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'banksList',
  config : {
    bindings         : {  users: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/banks/components/list/BanksList.html'
  }
};
