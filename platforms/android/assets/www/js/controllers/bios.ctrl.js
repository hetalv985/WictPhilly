app.myapp.controller("biosController", function($scope, biosService){
	$scope.updateNavbar("Bios", true);
	
	$scope.bios = biosService.getBios();

	$scope.setSelected = function (selectedIndex) {
   		biosService.setSelectedIndex(selectedIndex);
	};

});