import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	nextjs,
	nestjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	docker,
	vest,
	uniqr,
	anchain,
	coachendo,
	refractlabs,
	shibal1,
	shibal2,
	shibal3,
	apolloclient,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
]

const technologies = [
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Next JS',
		icon: nextjs,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Apollo Client',
		icon: apolloclient,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Nest JS',
		icon: nestjs,
	},
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'docker',
		icon: docker,
	},
]

const experiences = [
	{
		title: 'Frontend Engineer',
		company_name: 'Stealth Startup',
		icon: vest,
		iconBg: '#000',
		date: 'August 2024 - October 2024',
		points: [
			'Bootstrapped the boilerplate for the new React frontend to facilitate the third revamp of the UI by taking the best parts of the previous app and adding UI/UX improvements such as tanstack-query over fetch, react-hook-form and shadcn over vanilla HTML inputs. The app structure followed better patterns such as colocation to welcome collaborators to the repo',
			'Fixed websocket disconnection issue that had been unresolved for over a week on the first day of employment',
			'Implemented Timer feature, a gamification add-on to the exchange that uses websocket and REST APIs to reset the timer globally for all users upon making a trade to incentivize trading activity',
			'Set up TradingView (financial charting library) and created the order form, which are the core UI components of the app',
		],
	},
	{
		title: 'Co-Founder & Engineer',
		company_name: 'UNIQR',
		icon: uniqr,
		iconBg: '#fff',
		date: 'April 2023 - June 2024',
		points: [
			'Developed UNIQR, a web application using vanilla JavaScript, HTML and CSS to generate QR codes that resemble user-uploaded images, enhancing user engagement and customization options',
			'Ensured a seamless and protected login experience for 1000+ active yearly users by integrating Auth0 for secure user authentication',
			'Enabled 400+ efficient and secure transactions within the application by implementing Stripe for handling payments',
			'Focused on responsive design and user-friendly interface, resulting in a highly intuitive and visually appealing web app',
		],
	},
	{
		title: 'Frontend Engineer',
		company_name: 'AnChain.AI',
		icon: anchain,
		iconBg: '#000',
		date: 'May 2022 - April 2023',
		points: [
			'Implemented hybrid web3 and web2 authentication which involves integrating blockchain wallet and centralized email authentication flows to ensure consistent identity management and user experience both on-chain and off-chain',
			'Facilitated project communication between the product manager, UI/UX designer, and engineers across the US and Asia',
			'Configured Apollo Client to consume GraphQL APIs and generate TypeScript types to ensure type-safety across services',
			'Developed mobile-responsive views and reusable UI components such as modals, tiles, and dropdowns that were used across the team for other client NFT projects',
		],
	},
	{
		title: 'Full Stack Developer',
		company_name: 'Refract Labs',
		icon: refractlabs,
		iconBg: '#fff',
		date: 'May 2021 - May 2022',
		points: [
			'Set up React / TypeScript frontend and NestJS / TypeScript backend boilerplates from scratch and bootstrapped Auth0, Material UI, Redux Toolkit, RTK Query, Mongoose, TypeScript configuration and linting as well as file structure',
			'Develop numerous end-to-end features involving robust API endpoints and UI components such as in-app chat, calendar, news feed, financial data visualizations, email and user activity notifications, dynamic report builder and validated forms',
			'Analyze and query S&P Global Market Intelligence data totaling about 300 GB to integrate into production database',
			'Mentor, pair program and write tickets for 3 interns as the tech lead and create documentation and engineering guidelines',
		],
	},
	{
		title: 'Software Engineering Intern',
		company_name: 'Coachendo',
		icon: coachendo,
		iconBg: '#fff',
		date: 'Jan 2021 - May 2021',
		points: [
			'Refactored the app by replacing Redux and Axios with Apollo Client to accommodate for GraphQL adoption',
			'Implemented infinite scroll by configuring cache field policies in Apollo Client with merge and read functions',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

const projects = [
	{
		name: 'shibal',
		description:
			'An Android/iOS cross-platform mobile app built with React Native and Flask maintained in one code base. Shibal offers a one-stop tool for training your shiba inu through detailed modules in the form of online education and socializing with other owners on a social media platform.',
		tags: [
			{
				name: 'react/javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'postgres',
				color: 'green-text-gradient',
			},
			{
				name: 'flask/python',
				color: 'pink-text-gradient',
			},
		],
		platform: 'mobile',
		image: [shibal1, shibal2, shibal3],
		source_code_link:
			'https://github.com/kimd345/shibal#a-mobile-app-for-shiba-inu-owners-to-train-and-bond-with-their-companion',
	},
]

export { services, technologies, experiences, testimonials, projects }
