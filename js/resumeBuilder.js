var bio = {
    "name": "Noor Ahmad",
    "role": "student",
    "contacts": {
        "mobile": "0579888888",
        "email": "Noor@gmail.com",
        "github": "noorba",
        "twitter": "@Noor",
        "location": "Riyadh"
    },
    "welcomeMessage": "Hi how are you ",
    "skills": ['speed', 'smart', 'funny'],
    "biopic": "images/biopic.gif",
    display: function() {
        if (bio.name.length > 0) {
            var formattednRole = HTMLheaderRole.replace("%data%", bio.role);
            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            $("#header").prepend(formattednRole,formattedName);
            var formattedwlcom = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
            $("#header").append(formattedwlcom,formattedbiopic);

            var formatteMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formatteEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var formattedGithun = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		    $("#topContacts").append(formatteMobile,formatteEmail,formattedTwitter,formattedGithun,formattedlocation);


            var formattefoterMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattefotterEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedfotterTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var formattedfotterGithun = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedfottrtlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		    $("#footerContacts").prepend(formattefoterMobile,formattefotterEmail,formattedfotterTwitter,formattedfotterGithun,formattedfottrtlocation);


            $("#header").append(HTMLskillsStart);
            for (var i = 0; bio.skills.length > i; ++i) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);


            }
        }


    }


};



var work = {
    "jobs": [{
        "employer": "PNU",
        "title": "Student",
        "location": "Riyadh",
        "dates": "inprogress",
        "description": "gsfgrhyjttkudtkf"
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescritopn = HTMLworkDescription.replace("%data%", job.description);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			
            $(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedDescritopn,formattedLocation);

        });

    }
};
var projects = {
    "projects": [{
        "title": "data entry",
        "dates": "2/5/2017",
        "description": "fvsbjgrijbhirjggvksegvkse",
        "images": ["images/data1.jpg", "images/data2.jpg"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(prog) {


            var formattedTitle = HTMLprojectTitle.replace("%data%", prog.title);
            var formatteDates = HTMLprojectDates.replace("%data%", prog.dates);
            $(".project-entry:last").append(formattedTitle,formatteDates);

            var formatteDescription = HTMLprojectDescription.replace("%data%", prog.description);
            $(".project-entry:last").append(formatteDescription);
            for (var i = 0; i< prog.images.length ; i++) {
                var formattedIl = HTMLprojectImage.replace("%data%", prog.images[i]);
                $(".project-entry:last").append(formattedIl);

            }
        });

    }
};




var education = {
    "schools": [{
        "name": "PNU",
        "location": "Riyadh,Ministry of Labor and Social Development",
        "degree": "BA",
        "majors": ["IS", "cyber"],
        "dates": "2017",
        "url": "www.pnu.com",
    }],
    "onlineCourses": [{
        "title": "frone end develpemt",
        "school": "udaciy",
        "dates": "12/4/2017",
        "url": "www.uacity.com"
    }],

    display: function() {

        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formatteSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formatteSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDgree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);

            $(".education-entry:last").append(formatteSchoolName,formatteSchoolLocation,formattedDgree,formattedSchoolDate,formattedSchoolMajors);

        });

        education.onlineCourses.forEach(function(online) {
            $("#education").append(HTMLonlineClasses);

            var formattedtitle = HTMLonlineTitle.replace("%data%", online.title);
            var formatteSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedDates = HTMLonlineDates.replace("%data%", online.dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", online.url);
           
		   $(".education-entry:last").append(formattedtitle,formatteSchool,formattedDates,formattedUrl);

        });

    }

};




bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);