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

var work = {
	jobs: [
		{
			employer: "Company 1",
			title: "Developer",
			location: "London, UK"
		},
		{
			employer: "Company 2",
			title: "Junior Developer"
		}
	]	
};
work.position = "Developer";
work.title = "Developer";
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

var inName = function(name) {
	var names = name.split(' ');
	names[0] = names[0][0].toUpperCase() + names[0].split(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	return names.join(" ");
}

var projects = [
	{
		title: "Sample Project One",
		dates: "bla",
		description: "A project where I did a few things",
		images: [ "image1/url", "image2/url" ]
	}
];

$("#mapDiv").append(googleMap);

projects.display = function(){
	for(i in projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects[i].description);

		$("#project-entry:last").append(formattedTitle);
		$("#project-entry:last").append(formattedDates);
		$("#project-entry:last").append(formattedDescription);

		if(projects[i].images) {
			for(j in projects[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects[i].images[j]);
				$("#project-entry:last").append(formattedImage);
			}
		}
	}
};

$("#main").append(internationalizeButton);

if(bio.skills) {
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills) {	
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

//if(work.jobs) {
	for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
//

$(document).click(function(loc) { // your code goes here 
	logClicks(loc.pageX, loc.pageY);
});

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

/*
$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
};*/

// appending header information to page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);


// appending contact information to page
$("#topContacts").prepend(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
//$("#topContacts").append(formattedContactGeneric);


/*
*/