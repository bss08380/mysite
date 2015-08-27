/*
Contains functions executed with regards to index.html

Functions include:
-browser history handling
-active nav bar selection handling
**************************************
*/

//globals
console.log("Creating globals");
var state = "";
var nav_link_inst;//the last/current link set to be the active link

//initial script for setting up popstate, history handling
console.log("Initializing popstate handling");
$(window).on('popstate', function(e){
	state = e.originalEvent.state;
	console.log("pop state: " + state.selectedContent);
    if(state){
        loadSiteContent(state.selectedContent);
    }
});

console.log("Loading functions");
//loads the home content into the main page
function loadHomeContent() {
	loadSiteContent("home");
}

//loads the home content into the main page
function loadProjectsContent() {
	loadSiteContent("projects");
}

//loads the home content into the main page
function loadHobbiesContent() {
	loadSiteContent("hobbies");
}

//loads specified content into the main page
function loadSiteContent(contentName) {
	//these names and paths are dynamically generated based upon 'contentName'
	var nav_content_div = $("#nav_content");
	var content_to_load = "html/" + contentName + ".html";
	var nav_link_name = "nav_li_" + contentName;
	//shift focus in navigation bar and load content pointed to by 'content_to_load'
	nav_link_inst.className = "";
	nav_link_inst = document.getElementById(nav_link_name);//shift focus to current selection
	nav_link_inst.className = "active";
	nav_content_div.load(content_to_load);
	window.history.pushState({ selectedContent: contentName }, "", "");
}

//initialization function for the body (run at body load)
function initBody()
{
	if (state == "") {
		nav_link_inst = document.getElementById("nav_link_home");//initial selection
		nav_link_inst.className = "active";//set initial selection active
		loadHomeContent();
	}
}