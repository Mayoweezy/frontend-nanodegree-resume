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
	skills : ["football manager on fm15", "software developer", "sunday league level footballer"]
}

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