app.myapp.service("biosService", function(){

	var bios = [];

	var selectedIndex = -1;

	var bio1 = {
		name : "Adele Lindenmeyr",
		title : "PhD, Dean, Villanova University College of Liberal Arts and Sciences",
		headshot : "img/bios/alindenmeyr.jpg",
		bio : "<p>Adele Lindenmeyr, PhD was appointed dean of Villanova University\'s College of Liberal Arts and Sciences in May 2015. An internationally recognized expert in Russian history and culture, she has published three books and numerous articles on modern Russian history. Her monograph Poverty Is Not A Vice: Charity, Society, and the State in Imperial Russia was awarded the Heldt Prize for Best Book Published by a Woman in Slavic Studies fromthe Association for Women in Slavic Studies. Her latest publication is a co-edited volume, entitled <em>Russia\'s Home Front, 1914-1922: The Experience of War and Revolution</em>, was published in 2016.</p>"
	};

	var bio2 = {
		name : "Andrew Grace",
		title : "Graduate Research Assistant, Villanova University",
		headshot : "img/bios/agrace.jpg",
		bio : "<p>Andrew Grace is a full-time graduate research assistant at Villanova University, pursuing a dual Master's degree in Computer Science and Software Engineering. Andrew\'s work has been funded by the $1.67 million grant that the National Science Foundation awarded to Villanova in 2013 for research in virtual reality and immersive video. Andrew has been working closely with Dr. Frank Klassner since January 2015, assisting with projects relating to Villanova\'s Virtual Reality CAVE facility.</p>"
	};

	var bio3 = {
		name : "Ashley Alberta",
		title : "Product Manager for Comcast Connected Health",
		headshot : "img/bios/aalberta.png",
		bio : "<p>Ashley Alberta is a Product Manager for Comcast Connected Health (CCH), where she focuses on virtual interaction and user engagement. Her background is in cognitive neuropsych research, which is a lens she likes to bring to all projects. Prior to joining CCH, Ashley has held positions at several nationwide behavioral healthcare systems and a successful start-up in roles that center around clinical innovation, user experience research and design thinking.</p>"
	};

	var bio4 = {
		name : "Bobby Ren",
		title : "iOS developer, Comcast",
		headshot : "img/bios/bren.png",
		bio : "<p>Bobby Ren has been an iOS developer for 5 years and has worked with multiple companies involved in health and fitness apps, social networking, payment and commerce, fashion, IoT and smart home apps. His primary programming language is Swift, and he also has extensive experience in Objective-C. Bobby worked in the startup world in California for several years before moving to Philadelphia as a freelancer, then joining Comcast as a mobile developer on the Xfinity Home team.</p>"
	};

	var bio5 = {
		name : "Carl Herberger",
		title : "Vice President, Security Solutions at Radware",
		headshot : "img/bios/cherberger.png",
		bio : "<p>Carl Herberger is the Vice President of Security Solutions at Radware, a leader in application delivery and security solutions that assures the availability, performance, and resilience of business-critical applications for over 10,000 enterprises and carriers worldwide. As a recognized information security expert, Carl draws on his extensive information security background in both the private and public sectors. He began his career in the U.S. Air Force as a computer warfare specialist at the Pentagon and managed critical operational intelligence programs aiding both the National Security Council and Secretary of the Air Force. Carl founded Allied InfoSecurity and held executive security positions at BarclayCard US, SunGard and Campbell Soup Co.</p>"
	};

	var bio6 = {
		name : "Chris Bastian",
		title : "SVP & CTO, SCTE/ISBE",
		headshot : "img/bios/cbastian.png",
		bio : "<p>Chris Bastian joined SCTE/ISBE in 2015 following three decades of leadership in advanced cable and network security technologies. Chris is responsible for all areas of technology and engineering to ensure that SCTE/ISBE maintains a leadership role in standardizing and operationalizing advanced technology, including the SCTE Standards Program. Prior to joining SCTE/ISBE, Chris spent 15 years with Comcast, 10 years with the National Security Agency, and 4 years with RCN. Chris holds a B.S. in Electrical Engineering from Penn State University, an M.S. in Electrical Engineering from George Washington University and an M.S. in Technical Management from Johns Hopkins University.</p>"
	};

	var bio7 = {
		name : "Chris Kocks",
		title : "Director, Internet of Things Practice, pureintegration",
		headshot : "img/bios/ckocks.png",
		bio : "<p>Chris Kocks is a Director at pureIntegration partnering with cable operators to develop, test, and deploy connected products & solutions. He has over 25 years\' expertise working for Accenture, Cox Communications, GM, and other leading firms. Mr. Kocks leads pureIntegration\'s IoT practice, responsible for partner relationships, client solutions, and direction of the IoT Lab utilized for early stage proofs of concept and solution delivery. He has delivered dozens of innovative open platform products, connected device, and security solutions in the telecommunications, automotive, and health industries. He earned his MBA from the University of Notre Dame.</p>"
	};

	var bio8 = {
		name : "Chris Satchell",
		title : "EVP and Chief Product Officer of Comcast Cable",
		headshot : "img/bios/csatchell.png",
		bio : "<p>As Executive Vice President and Chief Product Officer at Comcast Cable, Chris Satchell helps the industry leader in Video, High Speed Data, Communications and Home Automation / Security develop customer-focused products, innovations and services. Chris is responsible for Product Management, Design and Application / Device development across the Comcast Cable portfolio.</p><p>Most recently Satchell held the position of Consumer Technology Officer at Nike; leading strategy and execution (design, build, operate) related to all consumer-focused technology: e/mCommerce, Nike.com, Brick & Mortar Retail Technology & Infrastructure, Mobile Applications, Nike+, and Digital Brand Experiences / Activations.</p><p>Prior to Nike, Satchell held the position of Chief Technology Officer and Executive Vice President of R&D at IGT, the world leader in legalized gambling content, platforms and systems. Satchell\'s role encompassed direct responsibility for global product development, spanning Game Platforms and Content, Casino-Systems products and infrastructure, Innovation Labs and cross-industry standards and interoperability.</p><p>Satchell has a long history in the video games industry, culminating as Chief Technology Officer for the Interactive Entertainment Business (IEB) at Microsoft, where he was responsible for technical strategy and execution across the gaming business at Microsoft; Xbox, Games for Windows, Xbox Live and Microsoft Game Studios. Satchell was also directly responsible for all Microsoft game development platforms and services through the XNA organization. Other industry roles include serving as an Executive Director at The 3DO Company, Technical Director for Silicon Dreams ltd and an Artificial Intelligence specialist and Project Leader for Eidos Interactive PLC.</p><p>In previous lives Satchell has been an engineer on Safety Critical Railway Systems and conducted post-graduate research into distributed artificial intelligence.</p>"
	};

	var bio9 = {
		name : "Courtney Finn",
		title : "Software Engineer, Comcast",
		headshot : "img/bios/cfinn.png",
		bio : "<p>Courtney Finn is a web services engineer. Having started at Comcast in 2006, she has worked her way from front line in tech and executive support to QA, leading a team of six to developing applications as a middleware engineer. She\'s been invited to compete in national security hackers\' competition known as United States Cyber Challenge.  A graduate of Goldey Beacom College in Pike Creek, DE with a degree Computer Information Systems and Finance, Courtney resides in Delaware.</p>"
	};

	var bio10 = {
		name : "Felicite Moorman",
		title : "CEO of BuLogics and StratIS IoT",
		headshot : "img/bios/fmoorman.png",
		bio : "<p>Felicite Moorman is CEO of BuLogics and Co-founder and CEO of StratIS, an international speaker, an award-winning technology entrepreneur for the Internet of Things and Smart Cities and is focused on triple-bottom line growth.</p><p>Moorman was recently named in The Top 15 Women To Watch In Tech by the Business Journals, as well as on the list of The 50 Most Influential Women in IoT.</p><p>She has earned an international reputation as a go-to IoT industry expert, developing pioneering strategic partnerships and unprecedented technology strategies and initiatives.</p><p>Moorman is a frequent writer, speaker, and presenter.</p>"
	};

	var bio11 = {
		name : "Frank Klassner",
		title : "Professor and Director Center of Excellence in Enterprise Technology, Villanova University",
		headshot : "img/bios/fklassner.jpg",
		bio : "<p>Frank Klassner is a Professor in Villanova\'s Computing Sciences Department and has served as the second Director of Villanova's Center of Excellence in Enterprise Technology since 2006. He earned Bachelor of Science degrees in Computer Science and Electronics Engineering at the University of Scranton, and MS and PhD degrees in Computer Science at the University of Massachusetts at Amherst. His research work has included high-level adaptive signal processing, educational robotics, simulation, and virtual reality and 3D visualization. He has served as a member of the North America Lego Education Advisory Panel and as a consultant for the Vatican Internet Office and the Vatican Museums. He serves as Treasurer on the executive committee of The Higher Education Campus Alliance for Advanced Visualization.</p>"
	};

	var bio12 = {
		name : "Jeanine Heck",
		title : "Executive Dir, Product Development, Comcast",
		headshot : "img/bios/jheck.png",
		bio : "<p>Jeanine Gubler Heck serves as Executive Director in the Technology and Product organization of Comcast. In this role, Jeanine brings artificial intelligence into XFINITY products. She was the founding product manager for the X1 voice remote, which is used in more than 10 million Comcast customers\' homes. Since joining Comcast in 2007, in addition to voice remote, Jeanine has led the launch of a TV search engine, and managed the company\'s first TV recommendations engine.</p><p>Jeanine received her bachelor\'s degree in Computer Science & Engineering from the University of Pennsylvania and an MBA from Columbia University.  She lives in the Philadelphia area with her husband and 4 children.</p>"
	};

	var bio13 = {
		name : "Jenny Doctor",
		title : "Telecommunications Executive & Strategic Advisor, Comcast",
		headshot : "img/bios/jdoctor.png",
		bio : "<p>Jenny Doctor is a seasoned telecom executive with more than 25 years of successful career providing leadership in technology strategy, engineering, and network operation for established carriers globally. She held senior positions at Extelcom, Nextel, Sprint, and Ligado. She is currently Executive Director at Comcast leading the planning, build out, and operations of machineQ - Comcast's new enterprise IoT & M2M business. She holds a B.S. in Electronics and Communications Engineering from the University of Santo Tomas. Additionally, she studied business philosophy with The Aji Network, and took finance and venture capital executive programs in Georgetown and in UC Berkeley respectively.</p>"
	};

	var bio14 = {
		name : "Julie Spitkovsky",
		title : "Manager, Marketing and Communications, Netronix",
		headshot : "img/bios/jspitkovsky.png",
		bio : "<p>Julie Spitkovsky is the head of marketing at Netronix, Inc., a leading global IoT platform, headquartered in Philadelphia.  Ms. Spitkovsky completed her undergraduate degree at the University of Pennsylvania.  Through the practice of law, she spent the last decade provoking judges, juries, and governmental agencies on behalf of individuals in PA & NY.  Today, her tunnel vision for Netronix\'s growth is a unique opportunity for advocacy. While emphasizing how valuable content is to target, educate and inspire the masses, she also admits working with such innovative individuals has a lot to do with success in digital media. As brand ambassador, Julie wears Netronix\'s logo \'on her sleeve.\'</p>"
	};

	var bio15 = {
		name : "Katherine Chu",
		title : "Consulting Manager at IBB Consulting",
		headshot : "img/bios/kchu.png",
		bio : "<p>Katharine Chu specializes in strategic planning and technology/business strategy alignment for cable, media, and telecommunications companies. She has worked with technology companies to generate ideas, design, prototype, and develop go-to market strategies for IoT in the automotive, entertainment, beauty and healthcare, telecommunications, defense, lifestyle, home security and appliance industries. She is a Consulting Manager at IBB Consulting and holds a Master\'s Degree in Engineering Systems and Bachelor\'s Degrees in Material Science, Economics, and Comparative Media Studies from MIT.</p>"
	};

	var bio16 = {
		name : "Lora Cecere",
		title : "Founder and CEO, Supply Chain Insights",
		headshot : "img/bios/lcecere.png",
		bio : "<p>Lora Cecere is founder of the research firm, Supply Chain Insights. She is co-author of the book, \"Bricks Matter\" and author of the book, \"Metrics that Matter.\" She also authors the enterprise software blog Supply Chain Shaman. Lora has more than 30 years of diverse supply chain experience, and spent 9 years as an industry analyst with Gartner Group, AMR Research, and Altimeter Group. Prior to becoming a supply chain analyst she spent 15 years as a leader in the building of supply chain software at Manugistics and Descartes Systems Group, and several years as a supply chain practitioner.</p>"
	};

	var bio17 = {
		name : "Margaret (Peggy) McCoey",
		title : "Assistant Professor and CIS Graduate Director, LaSalle University",
		headshot : "img/bios/mmccoey.png",
		bio : "<p>Margaret McCoey is a CSC Assistant Professor and graduate program director for technology programs at La Salle University. Prior to joining academia, McCoey developed operating systems, data management, and business systems, along with specialized navigation and communication applications. She was the Chief Quality Assurance Officer for several real-time defense projects. McCoey was the founding director of the Digital Arts and Multimedia Design program at La Salle. She holds a B.A. in Math/CSC from La Salle and an MS in CSC from Villanova.</p>"
	};

	var bio18 = {
		name : "Mary Malone",
		title : "Principal Engineer, Comcast",
		headshot : "img/bios/mmalone.jpg",
		bio : "<p>Mary Malone, Principal Engineer at Comcast, holds an M.S. in Computer Science from Villanova University and a B.A. in Computer Science from La Salle University. Working as a Systems Engineer, Architect and Software Developer for over 25 years, she has been designing and developing software systems and leading teams in taking new and emerging technologies and translating them into real world applications for consumers and businesses. She joined Comcast Cable in 2007 and currently works in the Technology & Product Development organization. Mary \"moonlights\" as a musician, and can regularly be found playing Irish Trad fiddle in gigs around Philly.</p>"
	};

	var bio19 = {
		name : "Michelle Nowak",
		title : "Vice President, CSG International",
		headshot : "img/bios/mnowak.png",
		bio : "<p>Michelle Nowak is the Vice President of Product Management for Global BSS (Business Support Systems) Solutions at CSG International. Michelle has more than 25 years of experience in the technology industry, and an extensive background in telecommunications, cable, broadband, satellite enterprise software, solutions, and innovation. In her current position she sets long-term product vision, strategy and roadmaps for CSG\'s award-winning retail and wholesale billing solutions, network data mediation and other business-critical BSS solutions. Michelle attended both the State University College at Buffalo and Bryant Stratton College (Buffalo, NY) where she received her degree in Computer Programming.</p>"
	};

	var bio20 = {
		name : "Mike Jeronis",
		title : "VP Research and Product Development, InterDigital Communications",
		headshot : "img/bios/mjeronis.png",
		bio : "<p>Mike Jeronis is an operational leader with significant engineering and organizational management experience. Mike leads InterDigital\'s IoT engineering team in the commercialization of advanced technologies. Mike and his team architect advanced IoT and Data Management systems to solve the complexities found in Smart City and other IoT applications. Prior to the formation of the IoT practice, he led the InterDigital ASIC/DSP organization, which was responsible for chipset design and development of the InterDigital SlimChip product. Before Mike\'s 20+ year career at InterDigital, he developed Satellite-based communications systems at Lockheed Martin and developed proof-of-concept technologies for the Navy as an R&D contractor.</p>"
	};

	var bio21 = {
		name : "Morgan Devlin",
		title : "Business Analyst - AudienceXpress Team",
		headshot : "img/bios/mdevlin.png",
		bio : "<p>Morgan Devlin is a business analyst for Comcast on the Visible World team, a leading provider of targeted TV advertising solutions.  Previously, Morgan worked as an intern for Comcast in both business continuity and data analytics.  While interning, Morgan worked with executives and fellow interns to innovate new products for the X1 Platform.  She graduated with honors from the University of South Carolina in May with a degree in Mathematics and a minor in Statistics.</p>"
	};

	var bio22 = {
		name : "Pam Nobles",
		title : "Learning and development leader in the telecommunications industry",
		headshot : "img/bios/pnobles.png",
		bio : "<p>Pam Nobles is a learning and development leader in the telecommunications industry. Through her career, she has developed and implemented training, certification, and career progression programs that align with industry needs to advance the knowledge and skill levels of engineering and operations professionals. Pam\'s education includes a Master\'s in curriculum and instruction and a Bachelor\'s in electrical engineering technology. She has been honored with the Women in Technology Award, the Jones International Medallion of the Alliance, and SCTE\'s Member of the Year. CableFax Magazine has named Pam as one of the Top Women in Cable Tech for seven years.</p>"
	};

	var bio23 = {
		name : "Robert Rockell",
		title : "Vice President of Network Engineering, Comcast Corporation ",
		headshot : "img/bios/rrockwell.png",
		bio : "<p>Rob Rockell serves as the Vice President of Network Infrastructure at Comcast, where he leads the organization that designs, builds and operate Comcast\'s national IP Infrastructure, supporting all of Comcast\'s Residential and Business products.</p><p>Rob is a Board Member for the Philadelphia Chapter of WICT, and the Executive Sponsor for the Southern New Jersey chapter of Tech Women.</p><p>Rob has a double degree in Physics and Philosophy from Carnegie Mellon University, and enjoys time with his wife Deb and his two daughters Rosie and Gabby.</p>"
	};

	var bio24 = {
		name : "Ron Thompson",
		title : "Director, Business Development for Innovation & Emerging Tech, Eaton Corp",
		headshot : "img/bios/rthompson.png",
		bio : "<p>Ron Thompson is Director of Business Development for Innovation & Emerging Technologies for Eaton\'s electrical business. Prior to this role, Ron was Business Manager for Eaton\'s IdleAire Technologies national deployment program and held various roles in segment marketing in support of higher education, healthcare and data centers. Before joining Eaton in 1994, Ron held positions in field sales with Westinghouse and in electric systems design and contracts engineering with the Tennessee Valley Authority. Ron grew up in his family\'s electrical contracting business and is a member of NFPA , EPRI/WC Advisory Board, and the University of Tennessee COE Industry Advisory Board.</p>"
	};

	var bio25 = {
		name : "Ronah Harris",
		title : "Owner, Hacker Prep",
		headshot : "img/bios/rharris.png",
		bio : "<p>Dr. Ronah Harris is a teacher and a maker. She was awarded Two Daytime Emmys for her work on the educational television shows Sesame Street and The Electric Company. She also helped write the first computer science curriculum for NYC public schools, CS for ALL. Dr. Harris has taught at Teachers College, Columbia University, published and consulted on topics of cognition, creativity, innovation, technology and design. Dr. Harris is the founder of Makers Prep, an educational technology start-up. She lives in Philadelphia with her two children. She makes interactive toys and dolls in her spare time.</p>"
	};

	var bio26 = {
		name : "Sandra Cavazos",
		title : "Product Manager for Comcast Connected Health",
		headshot : "img/bios/scavazos.png",
		bio : "<p>Sandy Cavazos is a Product Manager for Comcast\'s Connected Health program, where she leads the effort to reimagine healthcare for patients and providers by providing them with instantaneous and seamless access to the people, information and resources they need most. She has 12 years of experience in product development and engineering roles at Comcast and Intel Corporation. Sandy holds a B.S. in Biomedical Engineering, Electrical Engineering and German from Duke and a M.S. in Electrical Engineering from Stanford.</p>"
	};

	var bio27 = {
		name : "Sharmila Ravi",
		title : "VP Software Engineering, Comcast ",
		headshot : "img/bios/sravi.png",
		bio : "<p>Sharmila Ravi is VP of Software Engineering at Comcast. She is responsible for architecting, developing and delivering software for Home Security and IoT products at Comcast.</p><p>Sharmila has over 20 years of experience in consumer electronics and cable industries. At Comcast, Sharmila successfully launched many \"industry first\" products to Comcast subscribers, such as Gigabit services, Wireless Gateways, Extreme speeds, Skype on Xfinity, Xfinity Text Messaging, Universal Caller ID on TV and PC, and Voice services for both Residential and Commercial subscribers. In her current role, she stays on top of the latest technologies and drives to deliver top quality features with highest reliability. Prior to joining Comcast, she worked in consumer electronics industry and managed systems, software and testing teams to successfully launch industry first HDTV STBs, DirecTV STBs, HDTV\'s and DVRs for Panasonic.</p><p>Ravi is deeply involved in South Indian community activities/awareness programs. She volunteers and coordinates fundraisers for many Indian American charity organizations. She serves on the board of Bharathiya Temple and is a lead of APA (Asian Pacific Association) at Comcast.</p><p>Sharmila received her Bachelors in Electrical Engineering from Siddhartha Engineering College and Masters in Electrical Engineering from Old Dominion University.</p><p>She resides in Pennsylvania with her husband, Rao, and their two daughters.</p>"
	};

	var bio28 = {
		name : "Suktika Mukhopadhyay",
		title : "Manager, Cybersecurity and Privacy, PWC",
		headshot : "img/bios/smukhopadhyay.png",
		bio : "<p>Suktika Mukhopadhyay is a Manager in PwC\'s Cybersecurity and Privacy practice, based out of Philadelphia. She started her PwC career performing attack & penetration testing and social engineering. Today, she focuses on clients in the Telecommunications, Entertainment & Media sector, helping them understand their security risks and threats, partnering with them on designing their security strategy, data protection and compliance programs.</p><p>Suktika is passionate about empowerment of women and acts as an ambassador for the Evoluer House, a non-profit that works with marginalized girls of color in Philadelphia and delivers empowerment programs that help the girls envision a future devoid of disadvantages and filled with possibilities.</p>"
	};

	var bio29 = {
		name : "Thad Bogner",
		title : "Manager, Cybersecurity and Privacy, PWC",
		headshot : "img/bios/tbogner.png",
		bio : "<p>Thad Bogner is a Manager in PwC\'s Cybersecurity & Privacy practice, based out of Philadelphia. He has been with PwC for over a half decade and has worked with dozens of clients internationally. Thad specializes in security assessment services (e.g., penetration testing, phishing, and web application security assessments) and has also been on the defender\'s side previous to joining PwC.</p>"
	};

	var bio30 = {
		name : "Pawankumar Tripathi",
		title : "Technology Lead, Infosys",
		headshot : "img/bios/ptripathi.png",
		bio : "<p>Pawan is a technology lead from Infosys with over 10 years of IT experience. He holds Bachelor\'s degree in Computer Science from Mumbai University. Pawan started as a GUI developer in 2007, and worked on Sybase\'s PowerBuilder IDE for 2 years. In 2009, he was inducted in Infosys\' Mobile Center of Excellence group and has authored applications for various clients of Infosys in retail, media and entertainment domain. Engaged with Comcast since 2011, he presently leads application development for Android and iOS platform. He is versed in Java, Swift and Go and aims at becoming a full stack developer.</p>"
	};

	var bio31 = {
		name : "Hetal Vora",
		title : "Architect-Mobility, Cognizant Technology Solutions",
		headshot : "img/bios/hvora.jpg",
		bio : "<p>Hetal Vora currently works as an Architect-Mobility for Cognizant Technology Solutions U.S. Corp. She has over 9 years of experience in the IT industry. She holds a Bachelor\'s degree in Computer Engineering from Mumbai University. Hetal started out in 2006 as a web developer working on technologies like ColdFusion, HTML, CSS, Javascript for around 2 years. She then moved on to Java and is a Sun Certified Java Programmer. However, mobile apps are what she loves doing now. She started working on iOS in 2009 and has developed and published apps to the Apple app store for her client. She also developed several enterprise apps for her clients. She expanded her mobile technology repertoire by developing hybrid apps using Apache Cordova/Adobe Phonegap and Appcelerator Titanium as well. She currently works on developing native and hybrid enterprise mobile apps for Comcast. In her spare time, she enjoys traveling, photography and blogging.</p>"
	};


	bios = [bio1,bio2,bio3,bio4,bio5,bio6,bio7,bio8,bio9,bio10,bio11,bio12,bio13,bio14,bio15,bio16,bio17,bio18,bio19,bio20,bio21,bio22,bio23, bio24, bio25, bio26, bio27, bio28, bio29, bio30, bio31]; 

	var getBios = function() {
		return bios;
	};

	var getSelectedIndex = function() {
		return selectedIndex;
	};

	var getSelectedBio = function(selectedIndex) {
		return bios[selectedIndex];
	};

	var setSelectedIndex = function(selectedIndx) {
		selectedIndex = selectedIndx;
	};

	var clearSelectedIndex = function(){
		selectedIndex = -1;
	};

	return{
		getBios: getBios,
		getSelectedIndex: getSelectedIndex,
		getSelectedBio: getSelectedBio,
    	setSelectedIndex: setSelectedIndex,
    	clearSelectedIndex: clearSelectedIndex
	};

});