export default {
  name : 'bankDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : 'src/banks/components/details/BankDetails.html',
    controller       : [ '$mdBottomSheet', '$log', class BankDetailsController  {

      /**
       * Constructor
       *
       * @param $mdBottomSheet
       * @param $log
       */
      constructor($mdBottomSheet, $log) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;
      }

      /**
       * Show the bottom sheet
       */
      share() {
        var bank = this.selected;
        var $mdBottomSheet = this.$mdBottomSheet;

        $mdBottomSheet.show({
          parent: angular.element(document. getElementById('content')),
          templateUrl: 'src/banks/components/details/ContactSheet.html',
          controller: [ '$mdBottomSheet', BankSheetController],
          controllerAs: "$ctrl",
          bindToController : true
        }).then((clickedItem) => {
          this.$log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function BankSheetController( $mdBottomSheet ) {
          this.bank = bank;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.performAction = (action) => {
            $mdBottomSheet.hide(action);
          };
        }
      }
    } ]
  }
};
