app.myapp.controller("sponsorsController", function($scope){
	$scope.updateNavbar("Sponsors", true);

	$scope.sponsorsInfo = {};

	$scope.getSponsorsForCategory = function(category, count) {
		var premierSponsors = [];
		for(var i=1;i<=count;i++){
			var logoPath = "img/sponsors/"+category+"/"+i+".png";
			premierSponsors[i-1]=logoPath;
		}
		return premierSponsors;
	};

	$scope.sponsorsInfo.premierSponsors = $scope.getSponsorsForCategory("premier", 5);
	$scope.sponsorsInfo.platinumSponsors = $scope.getSponsorsForCategory("platinum", 7);
	$scope.sponsorsInfo.goldSponsors = $scope.getSponsorsForCategory("gold", 10);
	$scope.sponsorsInfo.silverSponsors = $scope.getSponsorsForCategory("silver", 3);

});