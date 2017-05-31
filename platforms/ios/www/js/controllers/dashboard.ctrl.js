app.myapp.controller("dashboardController", function($scope){
	$scope.dashboardMenu = {};
	$scope.updateNavbar("WICT Philadelphia TIO 2017", false);

	$scope.getRowHeight = function(){
		if(window.innerHeight >= 768){
			return 60;
		}
		else{
			return 40;
		}
	};

	var item1 = {
		itemTitle : "About",
		itemIcon : "img/about.svg",
		itemLink : "#/about",
		itemBg: "img/redCloud1.png",
	};

	var item2 = {
		itemTitle : "Locate",
		itemIcon : "img/locate.svg",
		itemLink : "#/locate",
		itemBg: "img/blueCloud1.png",
	};

	var item3 = {
		itemTitle : "Schedule",
		itemIcon : "img/schedule.svg",
		itemLink : "#/schedule",
		itemBg: "img/greenCloud1.png",
	};

	var item4 = {
		itemTitle : "Bios",
		itemIcon : "img/bios.svg",
		itemLink : "#/bios",
		itemBg: "img/orangeCloud1.png",
	};

	var item5 = {
		itemTitle : "Sponsors",
		itemIcon : "img/sponsor.svg",
		itemLink : "#/sponsors",
		itemBg: "img/lightRedCloud1.png",
	};

	var item6 = {
		itemTitle : "Register",
		itemIcon : "img/register.svg",
		itemLink : "#/registration",
		itemBg: "img/pinkCloud1.png",
	};

	$scope.dashboardMenu.items = [item1, item2, item3, item4, item5, item6];

});