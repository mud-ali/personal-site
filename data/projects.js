export const projectsData = [
	{
		id: 1,
		title: "DemoBiz",
		year: "2023",
		description:
			"Generates and delivers demographic and business data for aspiring business owners based on their chosen zip codes and target industries via email.",
		tools: [
			{ id: 0, name: "Flask" },
			{ id: 1, name: "Python 3" },
			{ id: 2, name: "Celery" },
			{ id: 3, name: "Redis" },
			{ id: 3, name: "Pandas" },
		],
		attachments: {
			"github.com": "https://github.com/arikamat/franchise-data-provider",
		}
	},
	{
		id: 2,
		title: "Havel",
		year: "2023",
		description:
			"A mobile app that intelligently recommends homestays to travelers based on their demographics and preferences.",
		tools: [
			{ id: 0, name: "React-Native" },
			{ id: 1, name: "Expo" },
			{ id: 2, name: "Tailwind" },
			{ id: 3, name: "Firebase" },
			{ id: 4, name: "Firestore" },
		],
		attachments: {
			"github.com": "https://github.com/Vacation-HomeStay/HomeStay",
		}
	},
	{
		id: 2.5,
		title: "NJT Rewards",
		year: "2023",
		description:
			"Utilized user’s transit tendencies and trends to suggest tailored local businesses to users, revamping its reward system. Presented to NJTransit @ HackRU 2023",
		tools: [
			{ id: 0, name: "ReactJS" },
			{ id: 1, name: "Next.js" },
			{ id: 2, name: "Firebase" },
			{ id: 3, name: "Bing API" },
		],
		attachments: {
			"github.com": "https://github.com/TransitRewards/TransitRewards2",
		}
	},
	{
		id: 3,
		title: "Last Mile",
		year: "2022",
		description:
			"A mobile app that provides a crowdsourced solution for last mile deliveries. Won Best Freshman Hack at HackNJIT 2022.",
		tools: [
			{ id: 0, name: "React-Native" },
			{ id: 1, name: "Expo" },
			{ id: 2, name: "Firebase" },
			{ id: 3, name: "Bing API" },
		],
		attachments: {
			"github.com": "https://github.com/LastMileApp/LastMileApp",
		}
	},
	{
		id: 4,
		title: "NJIT Planner",
		year: "2022",
		description:
			"An application that generates a calendar on Notion for NJIT students to plan out their semester.",
		tools: [
			{ id: 0, name: "Python 3" },
			{ id: 1, name: "Twilio" },
			{ id: 2, name: "Notion API" },
			{ id: 3, name: "Pandas" },
		],
	},
	{
		id: 5,
		title: "Freight Frenzy",
		year: "2021-2022",
		description:
			"As a captain of my FTC Robotics Team, I helped developed the autonomous and teleop code for the robot during the 2021-2022 season.",
		tools: [
			{ id: 0, name: "Android Studio" },
			{ id: 1, name: "OpenCV" },
			{ id: 2, name: "Java" },
			{ id: 3, name: "Gradle" },
			{ id: 4, name: "XML" },
		],
		attachments: {
			"github.com":
				"https://github.com/titanium-knights/team-a-2021-2022",
		},
	},
	{
		id: 6,
		title: "Ultimate Goal Scorer",
		year: "2020",
		description:
			"An android app that helps FTC teams score their matches during practices.",
		tools: [
			{ id: 0, name: "Android Studio" },
			{ id: 1, name: "Java" },
			{ id: 2, name: "Gradle" },
			{ id: 3, name: "XML" },
		],
		attachments: {
			"Play Store": "http://bit.ly/UltimateGoalScoreApp",
			"github.com": "https://github.com/arikamat/UltimateGoalScoringApp",
		},
	},
	{
		title: "TradeSignal",
		year: "2020",
		description:
			"An application that sends notifications to a group of stock traders whenever a recognized indicator is detected for a list of inputted securities. Application also paper trades the securities based on the identified indicators.",
		tools: [
			{ id: 0, name: "Python 3" },
			{ id: 0, name: "Alpaca API" },
			{ id: 0, name: "Discord API" },
		],
	},
	{
		title: "Ultimate Goal",
		year: "2020-2021",
		description:
			"As a captain of my FTC Robotics Team, I helped developed the autonomous and teleop code for the robot during the 2021-2022 season.",
		tools: [
			{ id: 0, name: "Android Studio" },
			{ id: 1, name: "OpenCV" },
			{ id: 2, name: "Java" },
			{ id: 3, name: "Gradle" },
			{ id: 4, name: "XML" },
		],

		attachments: {
			"github.com":
				"https://github.com/titanium-knights/team-b-2020-2021",
		},
	},
	{
		title: "Wheeler",
		year: "2020",
		description:
			"A stock screener that generates a list of highly favorable securities for trading based on the wheel strategy, utilizing the collateral to premium ratio and the user's budget.",
		tools: [
			{ id: 0, name: "Python 3" },
			{ id: 1, name: "Yahoo Finance API" },
			{ id: 2, name: "Pandas" },
			{ id: 3, name: "Options Knowledge and Data" },
		],
	},
	{
		title: "KeywordNotify",
		year:"2020",
		description:
			"Application that monitors a designated Discrod channel for specific keywords of user's choice and sends targeted notifications to the user via either Whatsapp or text message.",
		tools: [
			{ id: 0, name: "Python 3" },
			{ id: 1, name: "Discord API" },
			{ id: 2, name: "Requests" },
			{ id: 3, name: "Selenium" },
			{ id: 4, name: "Beautiful Soup" },
			{ id: 5, name: "Twilio API" },
		],
	},
	{
		title: "BCA AbsenceAlert",
		year: "2020",
		description:
			"An android app that reads updates from a Google Sheet maintained by the BCA administration to ensure students are informed about their teacher's absence in real-time. Recipient of the Best Mobile App at HackBCA 2020",
		tools: [
			{ id: 0, name: "Android Studio" },
			{ id: 1, name: "Java" },
			{ id: 2, name: "Google API" },
			{ id: 3, name: "XML" },
		],
	},
	{
		title: "BCCLS Notify",
		year: "2020",
		description:
			"An application to keep readers in the BCCLS Library System informed about upcoming due dates by sending timely notifications via text message or WhatsApp, ensuring one never misses returning a book on time.",
		tools: [
			{ id: 0, name: "Python 3" },
			{ id: 1, name: "Twilio API" },
			{ id: 2, name: "BeautifulSoup" },
		]
	},
	
	{
		title: "Skystone",
		year: "2019-2020",
		description: "As a captain of my FTC Robotics Team, I helped developed the autonomous and teleop code for the robot during the 2019-2020 season.",
		tools: [
			{ id: 0, name: "Android Studio" },
			{ id: 1, name: "OpenCV" },
			{ id: 2, name: "Java" },
			{ id: 3, name: "Gradle" },
			{ id: 4, name: "XML" },
		],
		attachments: {
			"github.com":"https://github.com/titanium-knights/team-b-2019-2020"
		}
	},
];
