app.myapp.controller("scheduleController", function($scope){
	$scope.updateNavbar("Schedule", true);

	$scope.scheduleInfo = [];

	var scheduleObj1 = {
		eventTitle: "Registration",
		eventTime: "8:00 AM - 10:00 AM",
		eventDescription: "<p><strong>Location: Connelly Center</strong></p>"
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
		eventDescription: "<p><strong>Location: Villanova Room, Connelly Center</strong></p><p><span class='subEventTitle'>Welcome to Villanova</span><br><span class='speaker'>Dr. Adele Lindenmeyr, Dean, College of Liberal Arts and Sciences, Villanova University</span></p><p><span class='subEventTitle'>Welcome & Orientation for the day</span><br><span class='speaker'>Mary Malone & Pam Nobles, WICT TIO Co-Chairs</span></p><p><span class='subEventTitle'>Introduction to Virtual Reality and the Diffusion of Innovation</span><br><span class='speaker'>Julie Krohner, Founder, McDaniel Krohner Consulting</span></p><p><span class='subEventTitle'>VR Trends, Evolution & What\'s Happening at NBC</span><br><span class='speaker'>Sowmya Gottipati, VP, NBC Universal Media Labs</span></p><p><span class='subEventTitle'>Virtual Reality Expert Panel</span></p><p>Moderator:<br><span class='speaker'>Louis Hillelson, VP, Group Publisher, Multichannel News</span></p><p>Panelists:<br><span class='speaker'>Frank Klassner, Professor and Director Center of Excellence in Enterprise Technology, Villanova University</span><br><span class='speaker'>Julie Krohner, Founder, McDaniel Krohner Consulting</span><br><span class='speaker'>Amanda Lange, Technical Evangelist, Microsoft</span><br><span class='speaker'>Julie LeMoine, Managing Partner HorizonIRs, Serial Entrepreneur, Large Company Innovator</span></p>"
	};

	var scheduleObj6 = {
		eventTitle: "Short Break",
		eventTime: "",
		eventDescription: ""
	};

	var scheduleObj7 = {
		eventTitle: "Luncheon",
		eventTime: "12:00 Noon - 1:30 PM",
		eventDescription: "<p><strong>Location: Villanova Room, Connelly Center</strong></p><p><span class='subEventTitle'>The Future of Cable Companies and AR/VR</span><br>Keynote Speaker:<br><span class='speaker'>Melinda Witmer, Former EVP, Chief Video Officer and COO, Time Warner Cable Networks</span></p>"
	};

	var scheduleObj8 = {
		eventTitle: "Short Break",
		eventTime: "",
		eventDescription: ""
	};

	var scheduleObj9 = {
		eventTitle: "Concurrent Breakout Sessions Track 1",
		eventTime: "1:30 PM - 2:15 PM",
		eventDescription: "<p><strong>Location: Villanova Room, Connelly Center</strong></p><p><span class='subEventTitle'>Bringing Your Cable TV to VR</span><br><span class='speaker'>Arpit Mathur, Principal Engineer, Comcast Innovation Labs</span><br><span class='speaker'>Jack Zankowski, Creative Director, Comcast UX Design</span></p><p><strong>Location: East Lounge, Dougherty Hall</strong></p><p><span class='subEventTitle'>Breaking Down Barriers: Possibilities for Virtual Education</span><br><span class='speaker'>Layla Mah, CEO, InsightfulVR</span><br><span class='speaker'>Cynthia Ibarra, COO, InsightfulVR</span></p><p><strong>Location: West Lounge, Dougherty Hall</strong></p><p><span class='subEventTitle'>The Emerging Case for Virtual Reality</span><br><span class='speaker'>Joe Walsh, Managing Director, InCode Consulting, a division of Ericsson</span></p>"
	};

	var scheduleObj10 = {
		eventTitle: "Concurrent Breakout Sessions Track 2",
		eventTime: "2:25 PM - 3:10 PM",
		eventDescription: "<p><strong>Location: Villanova Room, Connelly Center</strong></p><p><span class='subEventTitle'>Bringing VR to Consumers: A Roadmap and Discussion on VR Content Distribution</span><br><span class='speaker'>Alejandro Dinsmore, CEO, EEVO</span></p><p><strong>Location: East Lounge, Dougherty Hall</strong></p><p><span class='subEventTitle'>Applied Immersion – High Impact Examples: Working & Teaching on Virtual Ground, Construction and Urban Planning</span><br><span class='speaker'>Julie LeMoine, Managing Partner HorizonIRs, Serial Entrepreneur, Large Company Innovator</span></p><p><strong>Location: West Lounge, Dougherty Hall</strong></p><p><span class='subEventTitle'>She came she STEMmed, she conquered</span><br><span class='speaker'>STEM session planned and presented by students & interns</span></p>"
	};

	var scheduleObj11 = {
		eventTitle: "Break",
		eventTime: "3:10 PM - 3:30 PM",
		eventDescription: ""
	};

	var scheduleObj12 = {
		eventTitle: "Concurrent Breakout Sessions Track 3",
		eventTime: "3:30 PM - 4:15 PM",
		eventDescription: "<p><strong>Location: Villanova Room, Connelly Center</strong></p><p><span class='subEventTitle'>Using Unreal Engine With the Oculus Rift</span><br><span class='speaker'>Amanda Lange, Technical Evangelist, Microsoft</span></p><p><strong>Location: East Lounge, Dougherty Hall</strong></p><p><span class='subEventTitle'>Evaluating the Use of Physical Movement as a Trigger for Translations Between Environments in Virtual Reality</span><br><span class='speaker'>Josh Kohn, Virtual Reality Designer</span></p><p><strong>Location: West Lounge, Dougherty Hall</strong></p><p><span class='subEventTitle'>Remediating the Science Documentary for Cinematic Virtual Reality</span><br><span class='speaker'>Valentina Feldman, Immersive Media Producer/Researcher, Drexel University Media Dept.</span></p>"
	};

	var scheduleObj13 = {
		eventTitle: "Closing Remarks",
		eventTime: "4:25 PM - 4:45 PM",
		eventDescription: "<p><strong>Location: Villanova Room, Connelly Center</strong></p><p><span class='speaker'>Theresa Hennesy, SVP & Group Technical Advisor, Comcast Engineering & Platform Services</span></p>"
	};

	var scheduleObj14 = {
		eventTitle: "Networking/Reception/Adjourn",
		eventTime: "4:45 PM - 6:45 PM",
		eventDescription: ""
	};


	$scope.scheduleInfo = [scheduleObj1, scheduleObj2, scheduleObj3, scheduleObj4, scheduleObj5, scheduleObj6, scheduleObj7, scheduleObj8, scheduleObj9, scheduleObj10, scheduleObj11, scheduleObj12, scheduleObj13, scheduleObj14];

});