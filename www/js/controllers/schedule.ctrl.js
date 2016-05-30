app.myapp.controller("scheduleController", function($scope){
	$scope.updateNavbar("Schedule", true);

	$scope.scheduleInfo = [];

	var scheduleObj1 = {
		eventTitle: "Registration",
		eventTime: "8:00 AM - 10:00 AM",
		eventDescription: "<p><strong>Location: </strong>Connelly Center</p>"
	};

	var scheduleObj2 = {
		eventTitle: "Continental Breakfast",
		eventTime: "8:00 AM - 10:00 AM",
		eventDescription: ""
	};

	var scheduleObj3 = {
		eventTitle: "Sponsor Showcase",
		eventTime: "8:00 AM - 5:00 PM",
		eventDescription: ""
	};

	var scheduleObj4 = {
		eventTitle: "Villanova CAVE Demos at Falvey Library",
		eventTime: "Ticketed Times",
		eventDescription: ""
	};

	var scheduleObj5 = {
		eventTitle: "Opening Remarks",
		eventTime: "10:00 AM - 12:00 Noon",
		eventDescription: "<p><strong>Location: </strong>Villanova Room, Connelly Center</p><p>Welcome to Villanova<br>Dr. Adele Lindenmeyr, Dean, College of Liberal Arts and Sciences, Villanova University</p><p>Welcome & Orientation for the day<br>Mary Malone & Pam Nobles, WICT TIO Co-Chairs</p><p>Introduction to Virtual Reality and the Diffusion of Innovation<br>Julie Krohner, Founder, McDaniel Krohner Consulting</p><p>VR Trends, Evolution & What\'s Happening at NBC<br>Sowmya Gottipati, VP, NBC Universal Media Labs</p><p>Virtual Reality Expert Panel</p><p>Moderator:<br>Louis Hillelson, VP, Group Publisher, Multichannel News</p><p>Panelists:<br>Frank Klassner, Professor and Director Center of Excellence in Enterprise Technology, Villanova University<br>Julie Krohner, Founder, McDaniel Krohner Consulting<br>Julie Krohner, Founder, McDaniel Krohner Consulting<br>Julie LeMoine, Managing Partner HorizonIRs, Serial Entrepreneur, Large Company Innovator</p>"
	};

	var scheduleObj6 = {
		eventTitle: "Short Break",
		eventTime: "",
		eventDescription: ""
	};

	var scheduleObj7 = {
		eventTitle: "Luncheon",
		eventTime: "12:00 Noon - 1:30 PM",
		eventDescription: "<p><strong>Location: </strong>Villanova Room, Connelly Center</p><p>The Future of Cable Companies and AR/VR<br>Keynote Speaker:<br>Melinda Witmer, EVP, Chief Video Officer and COO, Time Warner Cable Networks</p>"
	};

	var scheduleObj8 = {
		eventTitle: "Short Break",
		eventTime: "",
		eventDescription: ""
	};

	var scheduleObj9 = {
		eventTitle: "Concurrent Breakout Sessions Track 1",
		eventTime: "1:30 PM - 2:15 PM",
		eventDescription: ""
	};

	$scope.scheduleInfo = [scheduleObj1, scheduleObj2, scheduleObj3, scheduleObj4, scheduleObj5, scheduleObj6, scheduleObj7, scheduleObj8];

});