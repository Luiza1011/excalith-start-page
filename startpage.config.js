const defaultConfig = {
	username: "Luiza",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "Science",
				color: "blue",
				align: "left",
				links: [
					{
						name: "PopSci",
						url: "https://popsci.com/",
						icon: "material-symbols:science"
					},
					{
						name: "Space",
						url: "fa6-solid:user-astronaut",
						icon: "mdi:reddit"
					},
					{
						name: "NASA",
						url: "https://blogs.nasa.gov/",
						icon: "simple-icons:nasa"
					},
					{
						name: "ESA",
						url: "https://blogs.esa.int/",
						icon: "mdi:black-mesa"
					}
				]
			},
			{
				title: "Tech",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "NBA GAMES",
						url: "https://nbastreams.app/",
						icon: "simple-icons:nba"
					},
					{
						name: "Emulator Roms",
						url: "https://romspure.cc/roms/",
						icon: "mdi:controller"
					},
					{
						name: "Cias Livre",
						url: "https://cias-livre.blogspot.com/",
						icon: "cib:nintendo-3ds"
					},
					{
						name: "Ed Drive",
						url: "https://mega.nz/folder/Ac8F2TZA#PQ5u10-ky8HaW6JHoyWG_Q",
						icon: "game-icons:guitar-bass-head"
					}
				]
			}
		]
	}
}

export default defaultConfig