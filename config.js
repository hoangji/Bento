// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'lukas',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'good morning!',
	greetingAfternoon: 'good afternoon,',
	greetingEvening: 'good evening,',
	greetingNight: 'good night session!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '5ee03036de90f60f06b5211f277e3b9d', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '47.262691',
	defaultLongitude: '11.394700',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'lfu',
			icon: 'trello',
			link: 'https://lfuonline.uibk.ac.at/public/lfuonline.home',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'lofi',
					link: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
				},
				{
					name: 'focus',
					link: 'https://www.youtube.com/watch?v=jvM9AfAzoSo',
				},
				{
					name: 'dance',
					link: 'https://www.youtube.com/watch?v=fKvMhydlXmI',
				},
				{
					name: 'relax',
					link: 'https://www.youtube.com/watch?v=PHklnuOvxfg',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'github',
					link: 'https://github.com/hoangji',
				},
				{
					name: 'calendar',
					link: 'https://calendar.google.com/calendar/r',
				},
				{
					name: 'drive',
					link: 'https://drive.google.com/drive/my-drive',
				},
				{
					name: 'coffee benefits',
					link: 'https://www.nytimes.com/2020/02/13/style/self-care/coffee-benefits.html',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'lfu',
					link: 'https://lfuonline.uibk.ac.at/public/lfuonline.home',
				},
				{
					name: 'olat',
					link: 'https://lms.uibk.ac.at/dmz/',
				},
				{
					name: 'latex',
					link: 'https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes',
				},
				{
					name: 'typefu',
					link: 'https://type-fu.com/app',
				},
			],
		},
		{
			icon: 'mails',
			id: '2',
			links: [
				{
					name: 'gmail',
					link: 'https://mail.google.com/mail/u/0/',
				},
				{
					name: 'outlook',
					link: 'https://outlook.live.com/mail/0/',
				},
				{
					name: 'proton',
					link: 'https://mail.proton.me/u/0/inbox',
				},
				{
					name: 'uni-mail',
					link: 'https://web-mail.uibk.ac.at/imp/login.php',
				},
			],
		},
	],
};