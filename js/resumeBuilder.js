var bio = {
	name : "Olu Plantain",
	role : "Person",
	contactInfo : {
		mobile : "678998212",
		email : "test@aol.com",
		twitter : "@waa",
		github : "Mayoweezy",
		blog : "don't have one",
		location : "somewhere",
		generic : "generic info" 
	},
	pictureURL : "images/fry.jpg",
	skills : ["football manager on fm15", "software developer", "sunday league level footballer"],
	welcomeMsg : "you are welcome!!!"
}

var work = {};
wor.position = "Developer";
work.employer = "Company";
work.years = "0.4"

var education = {};
education["name"] = "Some University"
education["years"] = "2007 - 2010"
education["city"] = "Northern city"


var educationJson = {
	schools: [
		{
			name: "schoolA",
			location: "school location",
			degree: "Bsc",
			major: "majored!",
			dates: "bla",
			url: "www.schoola.com"
		},
		{
			name: "schoolB",
			location: "school b location",
			degree: "A-levels",
			major: "majored!",
			dates: "bla",
			url: "www.schoolb.com"
		}
	],
	onlineCourses: [
		{
			title: "Front End Nanodegree",
			school: "Udacity",
			dates: "bla",
			url: ","
		}
	]
};

var projects = [
	{
		title: "Sample Project One",
		dates: "bla"
		description: "A project where I did a few things",
		images: [ "image1/url", "image2/url" ]
	}
];

/*

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
//var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contactInfo.generic);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
};



// appending header information to page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);


// appending contact information to page
$("#topContacts").prepend(formattedEmail);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedBlog);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);
//$("#topContacts").append(formattedContactGeneric);

*/