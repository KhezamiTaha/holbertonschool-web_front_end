//Write an object user with the attributes:

const user = {
	hobby: "Calligraphy",
	favoriteSport:" Hockey",
	astrologicalSign: "Aries",
	firstName: "Buillaume",
	lastName: "Johns",
	location: "Netherlands",
	occupation: "Engineer"
	}

	function logWelcomeUser(welcomeString) {
		console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
	}

	let bindLogWelcomeUser = logWelcomeUser.bind(user);

	logWelcomeUser("Welcome");