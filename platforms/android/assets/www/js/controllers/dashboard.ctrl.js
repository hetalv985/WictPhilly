app.myapp.controller("dashboardController", function($scope){
	$scope.dashboardMenu = {};
	$scope.dashboardMenu.title = "WICT Philadelphia";

	var item1 = {
		itemTitle : "About",
		itemIcon : "img/about.svg",
		iTemLink : "#/about"
	};

	var item2 = {
		itemTitle : "Locate",
		itemIcon : "img/locate.svg",
		iTemLink : "#/locate"
	};

	var item3 = {
		itemTitle : "Schedule",
		itemIcon : "img/schedule.svg",
		iTemLink : "#/schedule"
	};

	var item4 = {
		itemTitle : "Bios",
		itemIcon : "img/bios.svg",
		iTemLink : "#/bios"
	};

	var item5 = {
		itemTitle : "Sponsor",
		itemIcon : "img/sponsor.svg",
		iTemLink : "#/sponsor"
	};

	var item6 = {
		itemTitle : "Register",
		itemIcon : "img/register.svg",
		iTemLink : "#/register"
	};

	$scope.dashboardMenu.items = [item1, item2, item3, item4, item5, item6];

});