app.myapp.controller("scheduleController", function($scope){
	$scope.updateNavbar("Schedule", true);

	$scope.scheduleInfo = [];

	var scheduleObj1 = {
		eventTitle: "Registration and Continental Breakfast",
		eventTime: "8:00 AM - 10:00 AM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Connelly Center - Lower Level</strong></p></a>"
	};

	var scheduleObj2 = {
		eventTitle: "Sponsor Showcase",
		eventTime: "8:00 AM - 5:15 PM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Connelly Center - Lower Level</strong></p></a>"
	};

	var scheduleObj3 = {
		eventTitle: "PHILLYBLOCO - Brazillian Music to Shake Your Body and Soul",
		eventTime: "8:45 AM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Connelly Center - Villanova Room</strong></p></a>"
	};

	var scheduleObj4 = {
		eventTitle: "Opening Remarks",
		eventTime: "9:15 AM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Villanova Room, Connelly Center</strong></p></a><p><span class='subEventTitle'>Welcome to Villanova</span><br><span class='speaker'>Adele Lindenmeyr</span></p><p><span class='subEventTitle'>Welcome and Orientation</span><br><span class='speaker'>Mary Malone and Pam Nobles</span></p><p><span class='subEventTitle'>\"Making the Transition\" (Intern to Young Professional)</span><br><span class='speaker'>Morgan Devlin, Business Analyst - AudienceXpress Team</span></p><p><span class='subEventTitle'>Opening Remarks</span><br><span class='speaker'>Chris Satchell, EVP and Chief Product Officer of Comcast Cable</span></p>"
	};

	var scheduleObj5 = {
		eventTitle: "Short Break",
		eventTime: "10:25 AM",
		eventDescription: ""
	};

	var scheduleObj6 = {
		eventTitle: "Cable\'s Role in Providing IoT Services",
		eventTime: "10:40 AM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Villanova Room, Connelly Center</strong></p></a><br><span class='speaker'>Chris Bastian, SVP & CTO, SCTE/ISBE</span></p>"
	};

	var scheduleObj7 = {
		eventTitle: "Cities Made Smart by the IoT",
		eventTime: "11:05 AM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Villanova Room, Connelly Center</strong></p></a><br><span class='speaker'>Felicite Moorman, CEO of BuLogics and StratIS IoT</span></p>"
	};

	var scheduleObj8 = {
		eventTitle: "Luncheon",
		eventTime: "11:30 AM - 12:30 PM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Villanova Room, Connelly Center</strong></p></a><p><span class='subEventTitle'>Making IoT Work For Us</span><br>Keynote Speaker:<br><span class='speaker'>Sharmila Ravi, VP Software Engineering, Comcast</span></p>"
	};

	var scheduleObj9 = {
		eventTitle: "Group photo",
		eventTime: "12:30 PM",
		eventDescription: "<a class='bluelink' href='#/zoomeduniversitymap'><p><strong>Location: Photo location will be communicated</strong></p></a>"
	};

	var scheduleObj10 = {
		eventTitle: "Optional Cave Tours begin",
		eventTime: "12:45 PM",
		eventDescription: "<p><strong><a class='bluelink' href='#/zoomeduniversitymap'>Location: Falvey Library</a></strong></p>"
	};

	var scheduleObj11 = {
		eventTitle: "Breakout Session 1",
		eventTime: "12:45 PM - 1:25 PM",
		eventDescription: "<p><strong>Track 1<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Villanova Room, Connelly Center</a></strong></p><p><span class='subEventTitle'>IoT - Where are the Security Holes? (Student panel)</span><br><span class='speaker'>Margaret (Peggy) McCoey, Assistant Professor and CIS Graduate Director, LaSalle University</span></p><p><strong>Track 2<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: East Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>Comcast Connected Health</span><br><span class='speaker'>Sandra Cavazos, Product Manager for Comcast Connected Health</span><br><span class='speaker'>Ashley Alberta, Product Manager for Comcast Connected Health</span><br><span class='speaker'>Bobby Ren, iOS developer, Comcast</span></p><p><strong>Track 3<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: West Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>Machine Q for Smart Cities</span><br><span class='speaker'>Jenny Doctor, Telecommunications Executive & Strategic Advisor, Comcast</span></p><p><strong>Track 4<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Bartley Hall 1010</a></strong></p><p><span class='subEventTitle'>Comcast AI: Creating Brilliant Products</span><br><span class='speaker'>Jeanine Heck, Executive Dir, Product Development, Comcast</span></p>"
	};

	var scheduleObj12 = {
		eventTitle: "Breakout Session 2",
		eventTime: "1:30 PM - 2:15 PM",
		eventDescription: "<p><strong>Track 1<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Villanova Room, Connelly Center</a></strong></p><p><span class='subEventTitle'>Unlocking IoT Security</span><br><span class='speaker'>Suktika Mukhopadhyay, Manager, Cybersecurity and Privacy, PWC</span><br><span class='speaker'>Thad Bogner, Manager, Cybersecurity and Privacy, PWC</span></p><p><strong>Track 2<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: East Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>Eaton\'s Energy Management Circuit Breaker</span><br><span class='speaker'>Ron Thompson, Director, Business Development for Innovation & Emerging Tech, Eaton Corp</span></p><p><strong>Track 3<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: West Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>How Public and Private Partnerships Such as oneTRANSPORT can be Used to Accelerate Smart Cities</span><br><span class='speaker'>Mike Jeronis, VP Research and Product Development, InterDigital Communications</span></p><p><strong>Track4<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Bartley Hall 1010</a></strong></p><p><span class='subEventTitle'>Use of IoT in Logistics</span><br><span class='speaker'>Lora Cecere, Founder and CEO, Supply Chain Insights</span></p>"
	};

	var scheduleObj13 = {
		eventTitle: "Break",
		eventTime: "2:15 PM - 2:30 PM",
		eventDescription: "<p><strong><a class='bluelink' href='#/zoomeduniversitymap'>Location: Connelly Center - Lower Level</a></strong></p>"
	};

	var scheduleObj14 = {
		eventTitle: "Breakout Session 3",
		eventTime: "2:30 PM - 3:10 PM",
		eventDescription: "<p><strong>Track 1<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Villanova Room, Connelly Center</a></strong></p><p><span class='subEventTitle'>The Current Economics of Cyber Attacks</span><br><span class='speaker'>Carl Herberger, Vice President, Security Solutions at Radware</span></p><p><strong>Track 2<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: East Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>Fast Forward Your Career with University Relations</span><br><span class='speaker'>Kim Hall, University Tech Campus Recruiter, Comcast</span></p><p><strong>Track 3<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: West Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>Creating Wealth from the IoT</span><br><span class='speaker'>Michelle Nowak, Vice President, CSG International</span></p><p><strong>Track 4<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Bartley Hall 1010</a></strong></p><p><span class='subEventTitle'>Ethically Building a \"Single View of the Customer\" with Intelligent Data</span><br><span class='speaker'>Katharine Chu, Consulting Manager at IBB Consulting</span></p>"
	};

	var scheduleObj15 = {
		eventTitle: "Breakout Session 4",
		eventTime: "3:15 PM - 4:00 PM",
		eventDescription: "<p><strong>Track 1<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Villanova Room, Connelly Center</a></strong></p><p><span class='subEventTitle'>Why Do MSOs Care About Robotics & Artificial Intelligence?</span><br><span class='speaker'>Chris Kocks, Director, Internet of Things Practice, pureintegration</span></p><p><strong>Track 2<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: East Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>IoT Testing of Wearable Tech</span><br><span class='speaker'>Ronah Harris, Owner, Hacker Prep</span></p><p><strong>Track 3<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: West Lounge, Dougherty Hall</a></strong></p><p><span class='subEventTitle'>IoT Behind The Scenes: Integrating With Clients</span><br><span class='speaker'>Courtney Finn, Software Engineer, Comcast</span></p><p><strong>Track 4<br><a class='bluelink' href='#/zoomeduniversitymap'>Location: Bartley Hall 1010</a></strong></p><p><span class='subEventTitle'>Narrating the IoT story</span><br><span class='speaker'>Julie Spitkovsky, Manager, Marketing and Communications, Netronix</span></p>"
	};

	var scheduleObj16 = {
		eventTitle: "Closing Remarks and Giveaways",
		eventTime: "4:05 PM - 4:20 PM",
		eventDescription: "<p><strong><a class='bluelink' href='#/zoomeduniversitymap'>Location: Villanova Room, Connelly Center</a></strong></p>"
	};

	var scheduleObj17 = {
		eventTitle: "Reception",
		eventTime: "4:20 PM - 5:15 PM",
		eventDescription: "<p><strong><a class='bluelink' href='#/zoomeduniversitymap'>Location: Connelly Center - Lower Level</a></strong></p>"
	};


	$scope.scheduleInfo = [scheduleObj1, scheduleObj2, scheduleObj3, scheduleObj4, scheduleObj5, scheduleObj6, scheduleObj7, scheduleObj8, scheduleObj9, scheduleObj10, scheduleObj11, scheduleObj12, scheduleObj13, scheduleObj14,scheduleObj15,scheduleObj16,scheduleObj17];

});