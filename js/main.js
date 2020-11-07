// https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink)

}

// Add an id to the link of the year currently displayed in order to add styling
function tagYear(el) {

  var currentYear = document.getElementById("current-year");

  currentYear.removeAttribute("id");
  el.setAttribute("id", "current-year");

}

function toggleLines(on) {

  var outlines = document.getElementsByClassName("stroke");
  var radii = document.getElementsByClassName("stroke-radius");
  var states = document.getElementsByClassName("state");
  
  if(on == "true") {
    for (index = 0; index < outlines.length; ++index) {
      outlines[index].setAttribute("result", "inside-stroke");
    }
    for (index = 0; index < radii.length; ++index) {
      radii[index].setAttribute("radius", ".5");
    }
    for (index = 0; index < states.length; ++index) {
      states[index].setAttribute("stroke-width", "0");
    }
  }
  else {
    for (index = 0; index < outlines.length; ++index) {
      outlines[index].setAttribute("result", "");
    }
    for (index = 0; index < radii.length; ++index) {
      radii[index].setAttribute("radius", "0");
    }
    for (index = 0; index < states.length; ++index) {
      states[index].setAttribute("stroke-width", "0.25");
    }
  }
}