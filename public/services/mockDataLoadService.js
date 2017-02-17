(function() {
  'use strict';
  angular.module('BankApp').service('mockLoader',loader);
  
  function loader(User,Account,Transaction) {

      var vm = this;
      var customer;
      var account;

      var users = [{fName : "RAVITEJA", lName : "ADARI", postCd : "600116"}, 
                  {fName : "Praveen", lName : "Paul", postCd : "600102"}, 
                  {fName : "Siva", lName : "Natarajan", postCd : "600086"},
                  {fName : "Sangavi", lName : "Jayakumar", postCd : "600208"},
                  {fName : "Priya", lName : "K", postCd : "600078"},
                   {fName : "Suganya", lName : "Muthukumar", postCd : "600006"}, 
                  {fName : "Priya", lName : "Loganathan", postCd : "600196"}, 
                  {fName : "Anushika", lName : "Rajaram", postCd : "60009"},
                  {fName : "Kalpana", lName : "Duggineni", postCd : "600012"},
                  {fName : "Aswini", lName : "Mani", postCd : "600087"}
                  ];


    	vm.loadData = function(){
        var userObj =  (localStorage.getItem("User"));
        var acctObj = (localStorage.getItem("Account"));
        var txObj = (localStorage.getItem("Transaction"));

        if (userObj && acctObj && userObj != null && acctObj != null) {
          User.loadObject(JSON.parse(userObj));
          Account.loadObject(JSON.parse(acctObj));
          if (txObj) {
            Transaction.loadObject(JSON.parse(txObj));
          }
        } else {
          for(var i=0, len = users.length; i <len; i++) {
            var userId = User.addUser(users[i]);
                        Account.createAccount(userId,"Rupee");
          }   
       
          User.saveObj();
          Account.saveObj();
          Transaction.saveObj();
        }
    	};

  }
  loader.$indject = ['User','Account'];

})();