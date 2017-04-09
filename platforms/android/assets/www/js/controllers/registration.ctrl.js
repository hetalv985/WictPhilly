app.myapp.controller("registrationController", function($scope){
	$scope.registrationUrl = "http://events.constantcontact.com/register/event?llr=g6dgmkdab&oeidk=a07ecozo3ued6595a7a";

	$scope.openCordovaWebView = function()
	{
	  window.open($scope.registrationUrl,'_self'); 
	};
	
});

