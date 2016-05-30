app.myapp.service("biosService", function(){

	var bios = [];

	var selectedIndex = -1;

	var bio1 = {
		name : "Adele Lindenmeyr",
		title : "PhD, Dean, Villanova University College of Liberal Arts and Sciences",
		headshot : "img/bios/alindenmeyr.jpg",
		bio : "<p>Adele Lindenmeyr, PhD was appointed dean of Villanova University\'s College of Liberal Arts and Sciences in May 2015, after serving as interim dean for a year. Prior to that she served as dean of Graduate Studies in the College, a position she held for nearly five years.</p><p>An internationally recognized expert in Russian history and culture, Dr. Lindenmeyr graduated magna cum laude from the University of Pennsylvania with a bachelor\'s degree in Russian in 1971 and earned her PhD in History at Princeton University in 1980. After serving on the faculty at Carnegie Mellon University, she came to Villanova in 1987 as an assistant professor of History.  Promoted to full professor in 1999, she led the Department of History from 1998 to 2007.</p><p>Dr. Lindenmeyr has published three books and numerous articles on modern Russian history. Her monograph <em>Poverty Is Not A Vice: Charity, Society, and the State in Imperial Russia</em> (Princeton University Press, 1996) was awarded the Heldt Prize for Best Book Published by a Woman in Slavic Studies from the Association for Women in Slavic Studies. The organization also honored her in 2003 with its Outstanding Achievement Award. She has won several national fellowships to support her scholarship, including a research fellowship from the National Endowment for the Humanities. She has published in American, European, and Russian scholarly journals and books, and has presented her research at national and international conferences.  Her latest publication is a co-edited volume, entitled <em>Russia\'s Home Front, 1914-1922: The Experience of War and Revolution</em>, was published in 2016.</p>"
	};

	var bio2 = {
		name : "Alejandro Dinsmore",
		title : "CEO, EEVO",
		headshot : "img/bios/adinsmore.jpg",
		bio : "<p>Alejandro has an academic background in neuroscience and analytical philosophy. He has helped start two companies, the most recent of which, EEVO, is an end-to-end solution for managing and distributing VR content. Working with EEVO and having a background in neuroscience has resulted in his current obsession with VR. Some of EEVO's early clients include Felix & Paul and the New Museum.</p>"
	};

	var bio3 = {
		name : "Amanda Lange",
		title : "Technical Evangelist, Microsoft",
		headshot : "img/bios/alange.jpg",
		bio : "<p>Amanda Lange is a Technical Evangelist for Microsoft in the Philadelphia area. She is also a part-time video game critic for the web site <a href='http:\/\/www.tap-repeatedly.com'>http://www.tap-repeatedly.com<\/a>. Her current interests include the Internet of Things, gamification, and how games and technology can promote health. She has done academic research on game development and games and health applications. She has worked for Schell Games, Idle Media Inc, and Michigan State University where she worked on subjects as diverse as augmented reality and project management for mobile gaming.</p>"
	};

	var bio4 = {
		name : "Andrew Grace",
		title : "",
		headshot : "img/bios/agrace.jpg",
		bio : "<p>Andrew Grace is a full-time graduate research assistant at Villanova University, pursuing a dual Master's degree in Computer Science and Software Engineering. Andrew\'s work has been funded by the $1.67 million grant that the National Science Foundation awarded to Villanova in 2013 for research in virtual reality and immersive video. Andrew has been working closely with Dr. Frank Klassner since January 2015, assisting with projects relating to Villanova\'s Virtual Reality CAVE facility.</p>"
	};

	var bio5 = {
		name : "Arpit Mathur",
		title : "Principal Engineer, Comcast Innovation Labs",
		headshot : "img/bios/amathur.jpg",
		bio : "<p>Arpit Mathur is a Principal Engineer at Comcast Innovation Labs where he looks at new technologies and platforms that can help improve or extend Comcast services. Previous to that, Arpit had been part of Comcast Engineering working on Flash, JavaScript and mobile (iOS and Android) platforms and also spent a part of his career in the User Experience group looking at the design and UX aspects of different applications. He also co-manages Philadelphia\'s Android Developer group (AndroidPhilly) and is a Google Developer Groups Manager for Philadelphia.</p>"
	};

	var bio6 = {
		name : "Cynthia Ibarra",
		title : "Chief Operating Officer, InsightfulVr",
		headshot : "img/bios/cibarra.jpg",
		bio : "<p>Prior to becoming a Co-founder and Chief Operating Officer at INSIGHTFULVR, Cynthia spent her early career teaching English to children abroad. Soon after that, she transitioned to working both in the office and on the ground with non-profit organizations in Europe and in the U.S., particularly those involving youth outreach and opportunities for children with terminal illnesses. All these experiences have fueled Cynthia\'s passion to break the barrier-to-entry and make VR accessible to all. She is particularly interested in the opportunities that such a breakthrough could provide, especially in regards to education.</p><p>When she\'s not busy at work Cynthia likes to spend her free time reading, ice skating, volunteering, and trying to reach her goal of setting foot on all seven continents!</p>"
	};

	var bio7 = {
		name : "Frank Klassner",
		title : "Professor and Director Center of Excellence in Enterprise Technology, Villanova University",
		headshot : "img/bios/fklassner.jpg",
		bio : "<p>Frank Klassner is a Professor in Villanova\'s Computing Sciences Department and has served as the second Director of Villanova's Center of Excellence in Enterprise Technology since 2006. He earned Bachelor of Science degrees in Computer Science and Electronics Engineering at the University of Scranton, and MS and PhD degrees in Computer Science at the University of Massachusetts at Amherst. His research work has included high-level adaptive signal processing, educational robotics, simulation, and virtual reality and 3D visualization. He has served as a member of the North America Lego Education Advisory Panel and as a consultant for the Vatican Internet Office and the Vatican Museums. He serves as Treasurer on the executive committee of The Higher Education Campus Alliance for Advanced Visualization.</p>"
	};

	var bio8 = {
		name : "Hetal Vora",
		title : "Architect-Mobility, Cognizant",
		headshot : "img/bios/hvora.jpg",
		bio : "<p>Hetal Vora currently works as an Architect-Mobility for Cognizant Technology Solutions U.S. Corp. She has over 9 years of experience in the IT industry. She holds a Bachelor\'s degree in Computer Engineering from Mumbai University. Hetal started out in 2006 as a web developer working on technologies like ColdFusion, HTML, CSS, Javascript for around 2 years. She then moved on to Java and is a Sun Certified Java Programmer. However, mobile apps are what she loves doing now. She started working on iOS in 2009 and has developed and published apps to the Apple app store for her client. She also developed several enterprise apps for her clients. She expanded her mobile technology repertoire by developing hybrid apps using Apache Cordova/Adobe Phonegap and Appcelerator Titanium as well. She currently works on developing native and hybrid enterprise mobile apps for Comcast. In her spare time, she enjoys traveling, photography and blogging.</p>"
	};

	var bio9 = {
		name : "Jack Zankowski",
		title : "Creative Director, Comcast",
		headshot : "img/bios/jzankowski.jpg",
		bio : "<p>Jack Zankowski is a Creative Director for Comcast Experience Design, Emerging Platforms. His team focuses on identifying design trends, emerging technology, and customer expectations to create next generation interfaces and experiences. Prior to forming this team, he designed the Emmy Award winning X1 Platform interface that spans across television, mobile, and web.</p>"
	};

	var bio10 = {
		name : "Joe Walsh",
		title : "Managing Director, inCode Consulting",
		headshot : "img/bios/jwalsh.jpg",
		bio : "<p>As Managing Director and co-leader of inCode\'s MSO practice, Joe leverages his experience working with communication service providers and startups to drive competitive, product, operational, and innovation strategy. His clients include Comcast, Cox, Charter in the MSO space as well as leading MNOs and OEMs in North America. Prior to joining inCode, Joe founded or was part of the management team for several high-tech startups including  SquareLoop, a unique location-based messaging company, and kinkos.com. He launched the GAP Fund at Virginia\'s Center for Innovative Technology where he invested in and advised telecom infrastructure, mobile application, gaming, and healthcare technology companies.</p>"
	};

	var bio11 = {
		name : "Josh Kohn",
		title : "Virtual Reality Designer",
		headshot : "img/bios/jkohn.png",
		bio : "<p>Josh Kohn always knew he wanted to be a game developer since the day his father gifted him an original Game Boy. After graduating college in 2008, he spent a few years working as an accountant and business intelligence consultant. However, instead of continuing an unfulfilling career, he took a large risk and changed his entire life by switching careers. While he holds a B.A. in Business Administration from Baldwin-Wallace University in Cleveland, OH, he matriculated to Drexel University\'s Antoinette Westphal College of Media Arts and Design in 2014 and recently graduated with a Master of Science in Digital Media.</p><p>His passion has always been in game development and exploring virtual reality design was a natural fit. Josh has a deep and intellectual curiosity about virtual reality design and it has been his main focus while earning his Master\'s degree at Drexel.</p><p>While working on his thesis at Drexel University, Josh has been recognized by his peers and professors as an expert on virtual reality design. His thesis aims to evaluate the use of physical movement as a trigger for scene transitions. Additionally, Josh\'s work in virtual reality and human computer interaction has been accepted on an international level was recently featured to the late breaking work category for CHI 2016.</p><p>Josh is an active member in the game developer and Philadelphia communities respectively. He has been a volunteer at the Games for Change and Game Developers Conference for several years now as well as being a member of the International Game Developers Association. His local involvement includes being a volunteer instructor for US2020PHL Game Camp Pilot Launch in March of 2015, where he taught young high school students about game design and helped them formulate game design ideas for Philly Tech Week. Additionally, Josh was also a teaching assistant for Drexel University since 2014. Lastly, he has also been involved in Philly Dev Night for several years.</p>"
	};

	var bio12 = {
		name : "Julie Krohner",
		title : "Founder, McDaniel Krohner Consulting",
		headshot : "img/bios/jkrohner.jpg",
		bio : "<p>I am a social scientist and ethnographic researcher in the fields of emerging technologies, social impact and healthcare. My research engages people from a place of empathy - fellow humans, never customers.</p><p>With a doctoral grounding in communication and psychological research methods, I have a down to earth yet strategically minded approach.  I attended the University of New Mexico to study with Everett Rogers, the father of Diffusion of Innovation Theory. As a Diffusion of Innovations scholar, the model (early/late adoption curve) serves as a framework in my studies to help the world\'s most influential companies - and those just gaining their sea legs - learn how/when/why people accept new ideas/products/services. I have partnered with clients of every scale to help them understand how people are engaging with current offerings, and what future iterations could look like.</p><p>Some of the studies I have done include:<br><ul><li>Putting the iPad prototype in the hands of the earliest adopters, to understand how they used the new technology, and their role in helping it diffuse into a mainstreamed device</li><li>Riding through the English countryside on a mobile veterinary unit, observing how medical devices used to administer antibiotics to horses giving birth could be improved</li><li>Helping a Fortune 50 healthcare technology company bring exercise science from athletes to the general population, by developing behavioral health coaching apps</li></ul></p><p>My niche and interest in emerging technologies is currently centered on virtual and mixed reality (VR/MR). I believe that virtual reality is the most immersive technology to cross the human path.  Never before have we had access to environments that trigger such striking empathy, and can redefine what counts as \'real life experience\'. I have a special interest in VR/MR, as its diffusion process is unique, and its opportunities for empathic connection can change the way we relate to others. I am documenting the diffusion of VR/MR from the objective perspective of a researcher, and developing new methods to study its impact.</p><p>In 2013, I took a vow to only do work that is for social good. I am interested in collaborating with design studios, developers, content creators and social impact agents who are making things to better our world.  Let's do work that matters, together.</p><p>I am based in the City of Brotherly love, and committed to lifting Philly up as the hotbed of technology and design that it is.  Go #PHL!</p>"
	};

	var bio13 = {
		name : "Julie LeMoine",
		title : "Managing Partner HorizonIRs, Serial Entrepreneur, Large Company Innovator",
		headshot : "img/bios/jlemoine.png",
		bio : "<p>Ms. LeMoine has over 20 years in applied innovation, information security, immersive reality and unified collaboration expertise. She has led these topics across large and small teams, has put 5 SW products into the market and has been a co-founder of 5 companies. She is an expert in applied immersive reality, social computing and strategic actionable planning that delivers innovation to organizations. She is a leader of maker, whose teams deliver tomorrow\'s vision, today. Her focus for the past 10 years has been the intersection of collaboration, reality and blended immersive reality for use cases such as global teaming, citizen engagement in urban planning, learning and development and university use of immersive reality, 3D on-boarding and more. Her work is bottom line focused for her clients and their customers and partners.</p>"
	};

	var bio14 = {
		name : "Layla Mah",
		title : "Chief Executive Officer, InsightfulVr",
		headshot : "img/bios/lmah.jpg",
		bio : "<p>Before leaving to found INSIGHTFULVR, Layla was AMD\'s Lead Architect of VR and Advanced Rendering, and the creator of the company\'s LiquidVR technology. At AMD, she was responsible for the company\'s unified vision, strategy and architecture (both hardware and software), with respect to virtual reality and other advanced rendering paradigms. Prior to her time at AMD, she also spent many years within the game industry, working on graphics engines and shipping games for both consoles and PCs</p><p>In her free time, you can find Layla ballroom dancing, driving at the race track, building robots, or ice skating.</p>"
	};

	var bio15 = {
		name : "Louis Hillelson",
		title : "VP/Group Publisher, Multichannel News",
		headshot : "img/bios/lhillelson.jpg",
		bio : "<p>As the Vice President at NewBay Media, Louis Hillelson is a dynamic executive leader with an expertise in business strategy. He works across all business functions and develops robust collaborations and alliances in the Media and Entertainment industry. Mr. Hillelson is known for his business development, partnerships and customer solutions and industry knowledge from content to production to distribution, advertising and technology. Recognized as a highly creative and analytical leader, he finds innovative solutions to drive extraordinary results. Some of his areas of excellence include: Strategic Planning, Events, Business Development, Management, Strategic Partnerships, Customer Focus, Marketing, Presentation and Public Speaking, Results, Leadership, and Solutions.</p>"
	};

	var bio16 = {
		name : "Mark Francisco",
		title : "Comcast Fellow, Technology + Product Development",
		headshot : "img/bios/mfrancisco.png",
		bio : "<p>Mark Francisco has been evolving video solutions within Comcast\'s advanced technology organizations since July, 2001.</p><p>His current focus is the delivery of television and other video content to the latest consumer devices spanning smart phones to UltraHD TV. Mark\'s accomplishments within Comcast include development of multi-room digital video recording, the launch of 3D television, an in-home transcoding device to deliver live TV to mobile devices and the launch of HEVC UltraHD television broadcasts. Mark has led trials in the area of automated home energy management and telemedicine for disease management and is leading the Internet of Things (IoT) vision creation for the company.</p><p>Previously, Mark spent six years leading the systems integration of CDMA Cellular Phones for Motorola.  Prior to Motorola, Mark spent nine years developing microwave communications hardware for communications and meteorological satellites while at Lockheed Martin. Mark has a BSEE degree from Rutgers College of Engineering and an MSEE degree from Drexel University.  He lives with his wife and two children in central New Jersey.  Mark is an avid triathlete and active with the Boy Scouts of America.</p><p>Mark has been granted eight and filed an additional 12 patents in the areas of communications systems and advanced video products and is currently serving as a promoter for the Digital Living Network Alliance (DLNA). Mark has successfully completed the Comcast Executive Leadership Forum (ELF) program and the SCTE-Tuck Executive Leadership Program.</p>"
	};

	var bio17 = {
		name : "Mary Malone",
		title : "Principal Engineer, Comcast Cable",
		headshot : "img/bios/mmalone.jpg",
		bio : "<p>Mary Malone, Principal Engineer at Comcast, holds an M.S. in Computer Science from Villanova University and a B.A. in Computer Science from La Salle University. Working as a Systems Engineer, Architect and Software Developer for over 25 years, she has been designing and developing software systems and leading teams in taking new and emerging technologies and translating them into real world applications for consumers and businesses. She joined Comcast Cable in 2007 and currently works in the Technology & Product Development organization.</p><p>Mary is a FIRST Robotics volunteer. In her spare time, she \"moonlights\" as a musician and can be found playing Irish Traditional fiddle in regular gigs around the Philadelphia area.</p>"
	};

	var bio18 = {
		name : "Melinda Witmer",
		title : "Executive Vice President, Chief Video Officer & Chief Operating Officer, Time Warner Cable Networks, TIime Warner Cable Inc.",
		headshot : "img/bios/mwitmer.jpg",
		bio : "<p>Melinda Witmer is Time Warner Cable\'s Executive Vice President, Chief Video Officer, Time Warner Cable and Chief Operating Officer, Time Warner Cable Networks.  In this role, she oversees Time Warner Cable\'s video and content including digital, linear, on demand and online video distribution operations and all content-related business including TWC TV and the acquisition and distribution arrangements for content across all platforms. She also has management oversight of the company\'s 40 regional and local news, sports, traffic, weather and lifestyle networks, including flagship NY1 in New York, as well as regional sports networks featuring the Los Angeles Lakers and the LA Dodgers.</p><p>Melinda and her team manage the company\'s relationships with programmers and content providers across the entertainment industry including movie studios, broadcast and cable television networks, and Internet and interactive providers as  well as sports leagues, teams and conferences.  Her team is also responsible for distribution of Time Warner Cable content on digital platforms, including defining and negotiating rights for TWC TV on all platforms and other digital offerings such as TV Everywhere, VOD and EST, as well as defining and programming the tiers and packages of content offerings.</p><p>Prior, she served as the company\'s Chief Programming (Content) Officer from 2007. Previously, she was Senior Vice President of Programming and, before that, Vice President and Chief Counsel of Programming in the company\'s Law Department.</p><p>Before joining Time Warner Cable, Ms. Witmer served as Vice President and Senior Counsel at the Home Box Office, Inc (HBO), where she worked from 1994 to 2001. Earlier in her career, she was an associate with the law firm of Paul, Hastings, Janofsky & Walker, working in New York and Los Angeles.</p><p>Melinda\'s many accolades are a testament to her influence in the industry, among them: 2011 USO Woman of the Year; 2009 Wonder Woman (Multichannel News); 2010 - 2013 \"50 Most Influential People in Sports Business\" (SportsBusiness Journal); 2011 \"Game Changers: Women in Sports Business\" (SportsBusiness Journal); 2012 \"Women in the Game\" (B&C/Multichannel News); 2010, 2011, 2013 and 2014 Most Powerful Women in Cable (CableFAX Magazine); 2012 - 2015 The 100 Cable\'s Top Power Players (CableFAX Magazine); 2013 \"Women in Entertainment Power 100\" (The Hollywood Reporter); and the 2013 Executive Leadership Award from the T. Howard Foundation for her commitment to diversity and inclusion in the industry and throughout her career.</p><p>Ms. Witmer is chairperson of the board of iNDemand, the leading provider of on-demand movies and event programming to the cable industry. She serves on the board of the NY Mets as well as the board of SNY, the regional sports network carrying Mets games. She is also a member of the Advisory Board for the Newhouse School at Syracuse University. Melinda was a founding member of the Senior Women\'s Council at Time Warner Cable and a leader in the development of mentoring and development programs for women at TWC. She is also a member of the company\'s Executive Inclusion Council overseeing the company\'s diversity and inclusion efforts.</p><p>She is a member of the New York and California Bar Associations, Women in Cable and Telecommunications (WICT), and Women in Film and Television. She earned her BS in accounting and finance from the University of Arizona, and her J.D. from the University of Pennsylvania Law School.</p><p>Time Warner Cable is among the largest providers of video, high-speed data and voice services in the U.S., connecting 15 million customers to entertainment, information and each other.</p>"
	};

	var bio19 = {
		name : "Pam Nobles",
		title : "Senior Director Performance Consulting & Architecture",
		headshot : "img/bios/pnobles.jpg",
		bio : "<p>Pam Nobles joined SCTE in 2007, after 25 years of experience working with cable system operators. She is responsible for the development and implementation of SCTE\'s certification and career progression programs that align with industry needs to advance the knowledge and skill levels of engineering and operations professionals.</p><p>Prior to joining SCTE, Pam was senior director of CommTech development for Comcast, and was based in Philadelphia. Throughout her career, she has served the industry in various engineering and learning and development roles. She has authored numerous articles for cable trade journals on the topics of technical training, technical operations, safety, and customer service.</p><p>CableFax Magazine has named Pam as one of the Top Women in Cable Tech seven times: in 2006, and every year from 2010-15. She also was honored as SCTE Member of the Year in 2002. In 1996 she received the Women in Technology Award, presented in partnership with SCTE and Women in Cable Telecommunications (WICT). She is the 1988 recipient of the Jones International \"Medallion of the Alliance.\"</p><p>Pam holds a Master\'s degree in Curriculum and Instruction from Colorado Christian University, a B.S. in Electrical Engineering Technology from Metropolitan State University, Denver, a B.A. in Fine Arts from William Paterson University of New Jersey, and an A.A.S. in Forestry from Paul Smith\'s College, New York.</p><p>Pam\'s SCTE certifications include the Broadband Communications Technician (BCT)-Emeritus, Business Class Services Specialist (BCSS)-Emeritus, Broadband Distribution Specialist (BDS)-Emeritus, Broadband Transport Specialist (BTS)-Emeritus, Broadband TelecomCenter Specialist (BTCS)-Emeritus, and BTCS-Data-Emeritus. She has completed the SCTE-Georgia Tech Management Development Program and the SCTE-Tuck Executive Leadership Program at Dartmouth.</p>"
	};

	var bio20 = {
		name : "Sowmya Gottipati",
		title : "VP, Media Labs, NBCUniversal",
		headshot : "img/bios/sgottipati.jpg",
		bio : "<p>Sowmya Gottipati is Vice President of Media Labs, Innovation arm of NBCUniversal. Sowmya drives technology innovation and help deliver business solutions enabled by emerging technologies with particular emphasis on developing new business models for NBCUniversal. She leads pilot and incubation programs in collaboration with start-up and venture capital community, academic research groups and technology professionals from the worlds of application and content strategy, mobile development, distribution, video, and consumer-experience technologies.  She is also the Co-Chair for one of the TechWomen Chapters at NBCUniversal.</p><p>Sowmya joined NBCUniversal from SMS/800, Inc., where she served as Vice President of Products and Services, and was responsible for product strategy. Previously, Sowmya served as a technology leader at AT&T where she managed and delivered products to the market that are currently bringing $3B+ in revenues. She has more than 19 years of hands-on experience in technology strategy and product innovation, product development, product and program management, and financial management.  While at AT&T, Sowmya delivered flagship multi-billion dollar products such as MPLS VPN, VoIP and Cloud services to market.</p><p>Sowmya holds a MS degree in Engineering from N.C. State University and MBA from Columbia Business School. Sowmya is passionate about education. She volunteers and provides financial support to various organizations that work towards bringing change to underprivileged children through education. She is an avid aviation enthusiast and holds a private pilot license.</p>"
	};

	var bio21 = {
		name : "Theresa Hennesy",
		title : "Senior Vice President, Group Technical Advisor, Comcast Cable",
		headshot : "img/bios/thennesy.jpg",
		bio : "<p>Theresa Hennesy leads Comcast\'s technology initiatives across Engineering & Platform Services (EPS), and manages the strategic roadmap for network, security and infrastructure. Theresa also oversees technology business continuity planning, directs the employee innovation initiative, manages the EPS intellectual property and patent portfolio, and serves on the company\'s Intellectual Property Council. In addition, Theresa helms the ongoing process to evolve EPS methodologies and processes.</p><p>Theresa was recently honored by Multichannel News as a \"Women in Technology\" leader and has been recognized by STEMconnector as one of the nation\'s 100 Diverse Corporate Leaders promoting the advancement of Science, Technology, Engineering and Math (STEM) education. She is a leader in Comcast\'s TECHWomen committee and mentor for an all-girls US FIRST Robotics team.</p><p>Theresa serves on the Board of Directors for Women in Cable and Telecommunications for the Philadelphia chapter and was honored with its \"Educator Award\" in 2015. Theresa is also a Betsy Magness Leadership graduate. She is an active member of the Society of Cable Telecommunications Engineers and Women in Technology.</p><p>Theresa serves as a member of the Federal Communications Commission\'s Communications Security, Reliability and Interoperability Council, and the FCC\'s Technical Advisory Council.</p><p>Theresa has been in the telecommunications industry for over thirty years. Prior to joining Comcast in 2011, she served as the Senior Vice President of Network Operations for broadband telephone network at Vonage, where she was responsible for all facets of network operations, business infrastructure and application production operations. Previously, Theresa was SVP of Technical Operations at VeriSign, SVP of Global Internet Operations at Cable & Wireless USA and held various leadership positions over 20 years at MCI.</p><p>Theresa lives in Philadelphia with her husband and they have two grown sons. She is originally from the Washington D.C. area and studied at George Mason University. Theresa is an avid supporter of breast cancer awareness, participating, and sponsoring a fund through the Avon Walk for Breast Cancer.</p>"
	};

	var bio22 = {
		name : "Valentina Feldman",
		title : "Immersive Media Producer/Researcher, Drexel University Digital Media Dept.",
		headshot : "img/bios/vfeldman.jpg",
		bio : "<p>Valentina Feldman is an immersive animator, educator, and freelance digital media producer based in Philadelphia, PA. She loves dinosaurs, complimentary color schemes, and working on interesting digital media projects with passionate, creative people.</p><p>Valentina graduated with distinction from Drexel University in 2015, earning a B.S. in Animation and Visual Effects and a minor in Fine Art. Her undergraduate studies focused on CGI lighting, rendering, and compositing, culminating with an animated adaptation of H. P. Lovecraft\'s \"At the Mountains of Madness\" produced in her senior year. Valentina\'s recent work focuses on accessible immersive media, specifically the design and production of mobile Virtual Reality (VR) and Augmented Reality (AR) experiences. She recently completed an accelerated M.S. in Digital Media from Drexel University, where she produced a cinematic VR documentary about the titanosaur Dreadnoughtus schrani, one of the largest dinosaurs ever discovered. This documentary is a synthesis of CGI paleoart reconstruction, prototype VR pipeline design, and the adaptation of structural narrative principles for immersive media. The accompanying thesis addresses dinosaur reconstruction from 3D fossil scans and biomechanics data, an experimental VR production pipeline, and an approach to directing viewer attention in an educational VR experience.</p><p>Valentina currently works as a freelance CG artist and adjunct animation professor at Drexel. She was the founding Vice President of the Drexel University VR Club, a volunteer K-12 fossil guide at the Rowan University Fossil Pit, a participant in the Philadelphia Startup Leaders 2015 Bootcamp, and a member of the Drexel ACM SIGGRAPH Chapter. When she isn\'t in a meeting, on set, or babysitting renders, she can generally be found spending time with her boyfriend and dog.</p>"
	};

	var bio23 = {
		name : "Vijay Gehlot",
		title : "Associate Professor and Graduate Programs Director, Dept. of Computing Sciences, Villanova University",
		headshot : "img/bios/vgehlot.jpg",
		bio : "<p>Vijay Gehlot is currently an Associate Professor and Graduate Programs Director in the department of Computing Sciences at Villanova University. He received his PhD in Computer and Information Science from the University of Pennsylvania. His current research focus is applications of Colored Petri Nets (CPNs) in modeling and analysis of systems, including system of systems and system dynamics. Specific focus of his research work include broadband networks architecture, modeling, measurement, and quality of experience.</p>"
	};


	bios = [bio1,bio2,bio3,bio4,bio5,bio6,bio7,bio8,bio9,bio10,bio11,bio12,bio13,bio14,bio15,bio16,bio17,bio18,bio19,bio20,bio21,bio22,bio23]; 

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