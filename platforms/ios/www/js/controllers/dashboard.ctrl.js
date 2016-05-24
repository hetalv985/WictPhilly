app.myapp.controller("dashboardController", function($scope){
	$scope.dashboardMenu = {};
	$scope.changeTitle("WICT Philadelphia");

	var item1 = {
		itemTitle : "About",
		itemIcon : "img/about.svg",
		itemLink : "#/about"
	};

	var item2 = {
		itemTitle : "Locate",
		itemIcon : "img/locate.svg",
		itemLink : "#/locate"
	};

	var item3 = {
		itemTitle : "Schedule",
		itemIcon : "img/schedule.svg",
		itemLink : "#/schedule"
	};

	var item4 = {
		itemTitle : "Bios",
		itemIcon : "img/bios.svg",
		itemLink : "#/bios"
	};

	var item5 = {
		itemTitle : "Sponsors",
		itemIcon : "img/sponsor.svg",
		itemLink : "#/sponsors"
	};

	var item6 = {
		itemTitle : "Register",
		itemIcon : "img/register.svg",
		itemLink : "#/register"
	};

	$scope.dashboardMenu.items = [item1, item2, item3, item4, item5, item6];

});