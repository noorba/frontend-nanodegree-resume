

var work ={
	"jobs":[
	{
	"employer":"PNU",
	"title":"Student",
	"location":"Riyadh",
	"dates":"inprogress",
	"description":"gsfgrhyjttkudtkf"
	}],
	display: function(){
		 work.jobs.forEach(function(job){
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates=HTMLworkDates.replace("%data%",job.dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescritopn=HTMLworkDescription.replace("%data%",job.description);
	$(".work-entry:last").append(formattedDescritopn);
	
});
		
	}
};
var projects ={
	"projects":[
	{
		"title":"data entry",
		"dates":"2/5/2017",
		"description":"fvsbjgrijbhirjggvksegvkse",
	    "images":["images/fry.jpg","images/fry.jpg"]
		}
	] ,
	display :function(){
		 $("#projects").append(HTMLprojectStart);
          projects.projects.forEach(function(prog){

   
         var formattedTitle=HTMLprojectTitle.replace("%data%",prog.title);
         $(".project-entry:last").append(formattedTitle);
   
         var formatteDates=HTMLprojectDates.replace("%data%",prog.dates);
         $(".project-entry:last").append(formatteDates);
   
          var formatteDescription=HTMLprojectDescription.replace("%data%",prog.description);
         $(".project-entry:last").append(formatteDescription);
         for (var i = 0;  projects.images.length < i; i++) {
          var formattedIl=HTMLprojectImage.replace("%data%", projects.images[i]);
         $(".project-entry").append(formattedIl);
 
     }});
	
	}
};

var bio ={
	"name":"noor ahmad",
	"role":"student",
	"contacts":{
		"mobile":"0579888888",
		"email":"Noor@gmail.com",
		"github":"noorba",
		"twitter":"@Noor",
		"location":"Riyadh"
	},
	" welcomeMessage":"Hi how are you ",
	"skills":['speed','smart','funny'],
	"bioPic":"images/biopic.gif" ,
	display: function(){
		if (bio.name.length >0){ 
		    var formattednRole = HTMLheaderRole.replace("%data%",bio.role);
	      $("#header").prepend(formattednRole);
        	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	       $("#header").prepend(formattedName);
		   var formattedwlcom = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	       $("#header").append(formattedwlcom);
	       
		   var formatteMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        	$("#topContacts").append(formatteMobile);
        	var formatteEmail = HTMLemail.replace("%data%",bio.contacts.email);
        	$("#topContacts").append(formatteEmail);
        	var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	      $("#topContacts").append(formattedTwitter);
        	var formattedGithun=HTMLgithub.replace("%data%",bio.contacts.github);
        	$("#topContacts").append(formattedGithun);
        	var formattedlocation=HTMLlocation.replace("%data%",bio.contacts.location);
        	$("#topContacts").append(formattedlocation);
			
	       var formattedbiopic = HTMLbioPic.replace("%data%",bio.bioPic);
	      $("#header").append(formattedbiopic);
		  
	     

	    
	
        	var formattefoterMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        	$("#footerContacts").prepend(formattefoterMobile);
        	var formattefotterEmail = HTMLemail.replace("%data%",bio.contacts.email);
        	$("#footerContacts").prepend(formattefotterEmail);
        	var formattedfotterTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	       $("#footerContacts").prepend(formattedfotterTwitter);
        	var formattedfotterGithun=HTMLgithub.replace("%data%",bio.contacts.github);
        	$("#footerContacts").prepend(formattedfotterGithun);
        	var formattedfottrtlocation=HTMLlocation.replace("%data%",bio.contacts.location);
        	$("#footerContacts").prepend(formattedfottrtlocation);

            $("#header").append(HTMLskillsStart);	
          for (var i = 0;  bio.skills.length > i; ++i) {
            	var formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
             	$("#skills").append(formattedSkill);
	
	
          }   }
		
		
             }

	
             };
		

var eduaction ={
   "schools":[
   {
       "name":"PNU",
       "location":"Riyadh",
       "degree":"BA",
       "majors":["IS","cyber"],
       "date":"2017",
       "url":"www.pnu.com",
   }],
   "onlinecourse":[
       {
           "title":"frone end develpemt",
           "schools":"udaciy",
           "dates":"12/4/2017",
           "url":"www.uacity.com"
       }],

     display: function(){

      for (var schol in eduaction.schools){
         $("#education").append(HTMLschoolStart);  
         var formatteSchoolName = HTMLschoolName.replace("%data%",eduaction.schools[schol].name);
         $(".education-entry:last").append(formatteSchoolName);
         var formatteSchoolLocation = HTMLschoolLocation.replace("%data%",eduaction.schools[schol].location);
         $(".education-entry:last").append(formatteSchoolLocation);
         var formattedDgree=HTMLschoolDegree.replace("%data%",eduaction.schools[schol].degree);
         $(".education-entry:last").append(formattedDgree);
         var formattedSchoolDate=HTMLschoolDates.replace("%data%",eduaction.schools[schol].date);
          $(".education-entry:last").append(formattedSchoolDate);
      
           }
   
    eduaction.onlinecourse.forEach(function(online){
     $("#education").append(HTMLonlineClasses);
   
      var formattedtitle = HTMLonlineTitle.replace("%data%",online.title);
     $(".education-entry:last").append(formattedtitle);
     var formatteSchool = HTMLonlineSchool.replace("%data%",online.schools);
     $(".education-entry:last").append(formatteSchool);
     var formattedDates=HTMLonlineDates.replace("%data%",online.dates);
     $(".education-entry:last").append(formattedDates);
   
      var formattedUrl=HTMLonlineURL.replace("%data%",online.url);
     $(".education-entry:last").append(formattedUrl);
   
    });

      }
   
       };


    /* function inName (name){
		 name.trim().split("");
		 console.log(name);
		 name[1]=name[1].toUpperCase;
		 name[0]=name[0].slice(0,1).toUpperCase+name[0].slice(1).toLowerCase;
		 
		 return  name[0]+""+name[1];
		  }
		  
	 $("#main").append(internationalizeButton);*/







      work.display();
     eduaction.display();
     bio.display();
     projects.display();
     $("#mapDiv").append(googleMap);
	
	

