/*
Contains functions executed with regards to index.html

Functions include:
-active nav bar selection handling
**************************************
*/

//initialization function for the body (run at body load)
function initBody()
{
    var controller = '@ViewContext.RouteData.Values["controller"].ToString()';
    var action = '@ViewContext.RouteData.Values["action"].ToString()';

    var nav_link_inst_mod;
    switch (action)
    {
        case "Index":
            nav_link_inst_mod = "home";
            break;
        case "Skills":
            nav_link_inst_mod = "skills";
            break;
        case "Projects":
            nav_link_inst_mod = "projects";
            break;
        case "Hobbies":
            nav_link_inst_mod = "hobbies";
            break;
    }

    var nav_link_name = "nav_li_" + nav_link_inst_mod;
    nav_link_inst = document.getElementById(nav_link_name);//shift focus to current selection
    nav_link_inst.className = "active";
}