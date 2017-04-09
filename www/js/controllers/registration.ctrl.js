app.myapp.controller("registrationController", function($scope){
	$scope.updateNavbar("Register", true);
	$scope.registrationUrl = "http://events.constantcontact.com/register/event?llr=g6dgmkdab&oeidk=a07ecozo3ued6595a7a";

	$scope.openCordovaWebView = function()
	{
	  cordova.InAppBrowser.open($scope.registrationUrl,'_self'); 
	};
	$scope.openCordovaWebView();
});

