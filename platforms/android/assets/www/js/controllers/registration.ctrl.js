app.myapp.controller("registrationController", function($scope){
	$scope.updateNavbar("Register", true);
	$scope.registrationUrl = "https://events.r20.constantcontact.com/register/eventReg?oeidk=a07edz4lfrpdaa452a3&oseq=&c=&ch=";

	$scope.openCordovaWebView = function()
	{
	  cordova.InAppBrowser.open($scope.registrationUrl,'_system','location=no,clearcache=yes,closebuttoncaption=Close,toolbar=yes,toolbarposition=top'); 
	};
	$scope.openCordovaWebView();
});

