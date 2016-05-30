app.myapp.controller("bioDetailsController", function($scope, biosService){
	
	var selectedIndex = biosService.getSelectedIndex();
	$scope.selectedSpeaker = biosService.getSelectedBio(selectedIndex);
	$scope.updateNavbar($scope.selectedSpeaker.name, true);


});