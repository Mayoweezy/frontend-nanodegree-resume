var name = "Olu Plantain";
var role = "Chosen One";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["tracksuit", ""];

$("#header").append(formattedName);
$("#header").append(formattedRole);